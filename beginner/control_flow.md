# Control Flow
keywords: **if**, **match**, **for**, **while**, **loop**, **if let**, **while let**

**vec!** 用來宣告vector

# if, else if, else
```rust
fn main() {
    let n = 5;

    if n < 0 {
        print!("{} is negative", n);
    } else if n > 0 {
        print!("{} is positive", n);
    } else {
        print!("{} is zero", n);
    }


    // if 也是 expression
    let formal = true;
    let greeting = if formal {
        "Good day to you."     // return a String
    } else {
        "Hey!"                 // return a String
    };  // 記得加上分號，所有 `let` bindings 都需要
}
```

# match
```rust
fn main() {
    let number = 13;
    match number {
        // Match a single value
        1 => println!("One!"),
        // Match several values
        2 | 3 | 5 | 7 | 11 => println!("This is a prime"),
        // Match an inclusive range
        13..=19 => println!("A teen"),
        _ => println!("Ain't special"),
    }

    let boolean = true;
    let binary = match boolean {
        // need to cover all the possible values
        false => 0,
        true => 1,
    }
}
```

# for
```rust
fn main() {
    // for and range
    for n in 1..101 {
        println!("{}", n);
    }

    for n in 1..=100 {
        println!("{}", n);
    }

    // for and iterators
    let names = vec!["Bob", "Frank", "Ferris"];
    for name in names.iter() {
        match name {
            &"Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }

    for name in names.into_iter() {
        match name {
            "Ferris" => println!("There is a rustacean among us!"),
            _ => println!("Hello {}", name),
        }
    }
    
    for name in names.iter_mut() {
        *name = match name {
            &mut "Ferris" => "There is a rustacean among us!",
            _ => "Hello",
        }
    }
}
```

# while
```rust
fn main() {
    let mut n = 3;

    while n != 0 {
        println!("{}", n);
        n -= 1;
    }
}
```

# loop
```rust
fn main() {
    let mut count = 0u32;

    loop {
        count += 1;
        if count == 3 {
            println!("three");
            continue;
        }

        if count == 5 {
            println!("break");
            break;
        }
    }

    // returning from loop
    let result = loop {
        counter += 1; 

        if counter == 10 {
            break counter * 2;
        }
    }
}
```

# if let
* Rust中的空類型是**Option**類型，是種枚舉類型，實例: **None**、**Some(value)**

```rust
fn main() {
    let optional = Some(7);
    
    match optional {
        Some(i) => {
            println!("This is a really long string and `{:?}`", i);
        },
        _ => {},
    };

    // 可用 if let 處理
    if let Some(i) = optional {
        println!("Matched {:?}!", i);
    }
}
```

# while let
作用跟**if let**相似

```rust
fn main() {
    let mut v = vec![1, 3, 5, 7, 11];
    while let Some(x) = v.pop() {
        println!("{}", x);
    }
}
```