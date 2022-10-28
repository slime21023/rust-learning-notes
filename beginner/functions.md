# Functions

* 具返回值
```rust
fn exclaim(input: String) -> String {
    let mut output = input.to_uppercase();
    output.push('!');
    output // 返回 output
}
```
* 無返回值
```rust
fn print_excited(input: String) {
    let output = exclaim(input);
    println!("{}", output);
}
```
