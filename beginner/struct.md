# Struct

### Define a struct
```rust
struct User {
    username: String,
    email: String,
    active: bool,
}
```

### Declare struct
```rust
let user1 = User {
    email: String::from("user@usermail.com"),
    username: String::from("user1"),
    active: true,
};

let email = String::from("user2@usermail.com");
let username = String::from("user2");
let user2 = User { email, username, active:true };
```

### Update syntax
```rust
let mut user1 = User {
    email: String::from("user@usermail.com"),
    username: String::from("user1"),
    active: false,
};

user1 = User { active: true, ..user1 };
```

### Access the struct member
```rust
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let mut point = Point { x: 0, y: 0 };

    point.x = 5;

    println!("The point is at ({}, {})", point.x, point.y);
}
```

### Struct method
```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.width * self.height
    }

    fn wider(&self, rect: &Rectangle) -> bool {
        self.width > rect.width
    }
}

fn main() {
    let rect1 = Rectangle { width: 30, height: 50 };
    let rect2 = Rectangle { width: 40, height: 20 };

    println!("{}", rect1.wider(&rect2));
}
```

### Struct Associated function 
```impl```的函數中沒有使用到```&self```參數(不依賴實例) e.g. ```String::from```
```rust
struct Rectangle {
    width: u32,
    height: u32,
}

impl Rectangle {
    fn create(width: u32, height: u32) -> Rectangle {
        Rectangle { width, height }
    }
}

fn main() {
    let rect = Rectangle::create(30, 50);
}
```

### Unit-like Structs
```rust
// define a struct with no members
struct Electron {}
struct Proton;

let x = Electron {};
let y = Proton;
```
* 很少用到
* 當使用library要求你implement trait來handle event時，你可以使用到(struct without any data)

### Tuple
```rust
fn main() {
    struct Color(u8, u8, u8);
    struct Point(f64, f64);

    let black = Color(0, 0, 0);
    let origin = Point(0.0, 0.0);

    println!("black = ({}, {}, {})", black.0, black.1, black.2);
    println!("origin = ({}, {})", origin.0, origin.1);
}
```