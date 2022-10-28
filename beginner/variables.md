# 變數

```rust
fn main() {
    // 以 let 宣告變數
    // 未加 mut，變數預設是 immutable (不可變的) 
    let mut x = 5; 
    x = 6; // value updates to 6
}
```

# 宣告常數
- 使用關鍵字 **const**
- 應以大寫跟底線命名

```rust
fn main() {
    const SCORE_LIMIT: u32 = 100;
}
```

# Shadow a variable
- 以相同的變數名，宣告一個新的變數，產生新的**binding**
- 新的變數 **shadow** 之前的變數

```rust
fn main() {
    let x = 5;
    let x = x + 1; // x is 6 now
}
```