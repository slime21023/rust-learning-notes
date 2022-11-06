# String

Rust has two main types of strings: `&str`, and `String`.

### `&str`
These are called `string slices`.
- have a fixed size, and can't be mutated.
- a reference to a sequence of  UTF-8 bytes.

```rust
fn main() {
    let greeting = "Hello World"; // greeting: &'static str    
}
```

### `String`
A `String` is a heap-allocated string.
- The `String` is a heap-allocated string.
- `String` is commonly created by converting from a string slice using the `to_string` method.

```rust 
fn main() {
    let mut s = "Hello".to_string(); // mut s: String
    println!("{}", s);

    s.push_str(", world.");
    println!("{}", s);
}
```

`String` will coerce into `&str` with an `&`.
```rust 
fn takes_slice(slice: &str) {
    println!("Got: {}", slice);
}

fn main() {
    let s = "Hello".to_string();
    takes_slice(&s);
}
```

### Indexing

Because strings are valid UTF-8, they do not support indexing.

```rust
fn main() {
    let hachiko = "忠犬ハチ公";

    for b in hachiko.as_bytes() {
        print!("{}, ", b);
    }
    println!("");

    for c in hachiko.chars() {
        print!("{}, ", c);
    }
    println!("");
}
```

### Slicing

You can get a slice of a string with the slicing syntax
- But note that these are byte offsets, not character offsets.

```rust
fn main() {
    let dog = "hachiko";
    let hachi = &dog[0..5];
}
```

### Concatenation
- If you have a String, you can concatenate a &str to the end of it

```rust
fn main() {
    let hello = "Hello ".to_string();
    let world = "world!";

    let hello_world = hello + world;
}
```