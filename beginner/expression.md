# Expreesion
Rust是 expression-oriented language

# Expression vs Statement
- **Expressions** evaluate to a value, they return that value.
- **Statements** are instructions that do something, they don’t return a value. 


# Example
```rust
let num = {
    let x = 4;
    x + 1 // return value
}
```