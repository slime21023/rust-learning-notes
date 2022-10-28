---
layout: layout.njk
title: Create new project
---

# 建立新專案
```bash
# cargo new <project-name>
cargo new rust-hello-world

# 建立 binary program 的專案
cargo new rust-bin-project --bin

# 建立 library 的專案
cargo new rust-lib-project --lib
```

# 目錄結構
含有 **Cargo.toml** 跟 **src**
- Cargo.toml: [Manifest](https://doc.rust-lang.org/cargo/appendix/glossary.html#manifest) 包含所有在Cargo要進行編譯時的metadata 

- src/main.rs: 程式的進入點

# 編譯
```bash
# 在專案目錄
cargo build
```

# 執行
```bash
# 在專案目錄
cargo run
```

# release
```bash
# 在專案目錄
cargo build --release

# 編譯好的binary會在target/release中
``` 