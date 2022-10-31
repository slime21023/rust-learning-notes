# Ownership

### Rules

- Each **value** in Rust has a **variable** that’s called its **owner**.
- There can only be **one owner at a time**.
- When the owner goes out of **scope**, the value will be dropped.

### Variable bindings

- **Have ownership** of what they're bound to.
- When a binding **goes out of scope**, Rust will **free the bound resources**.

```rust
fn main() {
    let v = vec![1, 2, 3];
}
```
- A new **vector** is created on the **stack**
- and **its elements** is allocated space on the **heap**


```rust
fn main() {
    let v = vec![1, 2, 3];
    let v2 = v;
    //get error
    println!("v[0] is: {}", v[0]);
}
```
### function takes ownership
```rust
fn take(v: Vec<i32>) {
    // do something
}

fn main() {
    let v = vec![1, 2, 3];
    take(v);
    // get error
    println!("v[0] is: {}", v[0]);
}
```

### **Copy** types
當ownership轉移到其他binding，就不能使用原來的binding
- 但可以使用**Copy** trait，改變這個操作
- Rust中，所有**primitive types**，都有實作**Copy** trait 

```rust
fn double(x: i32) -> i32 {
    x * 2
}

fn change_truth(x: bool) -> bool {
    !x
}

fn main() {
    let v = 1;
    let v2 = v;
    println!("v is: {}", v);

    let a = 5;
    let _y = double(a);
    println!("{}", a);

    let a = true;
    let _y = change_truth(a);
    println!("{}", a);
}
```

