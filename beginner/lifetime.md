# Lifetime
1. 獲得resource (e.g. variable宣告)
2. 將resource的reference借出
3. 不再使用resource釋放，但借出的reference還在使用 (like use after free)

此時，reference指向一個無效的resource。如果resource是memory時，這個reference就是**dangling pointer**


Rust中的所有權系統透過**lifetime**的概念修正這個問題，它會描述reference的有效範圍

### Borrow checker
Rust的編譯會檢查程式碼會不會使用到**dangling reference**
```rust
fn main() {
    let r: &i32;
    {
        let x: i32 = 5;
        r = &x;
    }
    // won't compile
    println!("r: {}", r);
}
```

```rust
// won't compile
// variable a 離開 function 就是放了
fn foo() -> &i32{
    let a = 42;
    &a
}
```

### Generical Lifetime Annotations
```'name``` : 宣告lifetime，讓編譯器追蹤reference

* One input reference with lifetime ```'a``` which must live at least as long as the function.
    ```rust
    fn print_one<'a>(x: &'a i32) {
        println!("print_one: x is {}", x);
    }
    ```
* Mutable references are possible with lifetimes as well.
    ```rust
    fn add_one<'a>(x: &'a mut i32) {
        *x += 1;
    }
    ```
* Multiple elements with different lifetimes.
    ```rust
    fn print_multi<'a, 'b>(x: &'a i32, y: &'b i32) {
        println!("print_multi: x is {}, y is {}", x, y);
    }
    ```
* Returning references that have been passed in is acceptable.
    ```rust
    fn pass_x<'a, 'b>(x: &'a i32, _: &'b i32) -> &'a i32 { x }
    ```

* When working with ```struct``` that contains references, you'll also need explict lifetimes
    ```rust
    struct Foo<'a> {
        x: &'a i32,
    }

    impl<'a> Foo<'a> {
        fn x(&self) -> &'a i32 { self.x }
    }

    fn main() {
        let y = &5; // This is the same as `let _y = 5; let y = &_y;`.
        let f = Foo { x: y };

        println!("x is: {}", f.x());
    }
    ```

### ```'static```
* special lifetime
* have the lifetime of the **entire program**

```rust
let x: &'static str = "Hello, world.";

static FOO: i32 = 5;
let y: &'static i32 = &FOO;
```

### Elision (省略)
```rust
// `elided_input` and `annotated_input` essentially have identical signatures
// because the lifetime of `elided_input` is inferred by the compile
fn elided_input(x: &i32) {
    println!("`elided_input`: {}", x);
}

fn annotated_input<'a>(x: &'a i32) {
    println!("`annotated_input`: {}", x);
}

// Similarly, `elided_pass` and `annotated_pass` have identical signatures
// because the lifetime is added implicitly to `elided_pass`:
fn elided_pass(x: &i32) -> &i32 { x }

fn annotated_pass<'a>(x: &'a i32) -> &'a i32 { x }
```