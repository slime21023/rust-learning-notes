# Primitives 原始型別

- **Scalar Types**
  - signed integer
  - unsigned integer
  - float
  - char
  - bool,
  - unit type(empty tuple) 
- **Compound Types**
  - array
  - tuple

# Scalar Types

```rust
fn main() {
    let default_int = 1; // i32
    let default_float = 3.0; // f64

    let i: i64 = 100;
    let i = 100i64;

    let ui: u32 = 10; // unsigned integer
    let logical: bool = true;
    
    // char 存放單個unicode字符，占用 4 btyes (32bits)
    let ch: char = 'A';

}
```

# Compound Type

```rust
fn main() {
    let array: [u32; 3] = [1, 2, 3];
    let first_array_item = array[0];

    let a = [3; 5];
    // let a = [3, 3, 3, 3, 3];

    let tuple: (bool, u16, u8) = (true, 2, 3);
    let first_tuple_item = tuple.0;
}
```

#  Integer Literals in Rust
| Number literals    |   Example  |
| --- | --- |
|  Decimal   |    98_222 |
|  Hex   |    0xff |
|  Octal   |    0o77 |
|   Binary  |    0b1111_0000 |
| Byte (u8 only)    |   b'A'  |