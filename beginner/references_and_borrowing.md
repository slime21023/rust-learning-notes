# References and Borrowing

- Take a **reference**: ```&Vec<i32>```
- ```&T``` type: reference
- pass ```&v1```, ```&v2``` to a function, 借用**ownerships**
- **goes out of scope**, 不會釋放resources

```rust
fn main() {
    fn foo(v1: &Vec<i32>, v2: &Vec<i32>) -> i32 {
        42
    }

    let v1 = vec![1, 2, 3];
    let v2 = vec![1, 2, 3];
    // can use `v1` and `v2` here! 
    let answer = foo(&v1, &v2);
}
```

### ```&mut``` references
- A **mutable reference** allows you to mutate the resource you're borrowning.
- Use **asterisks(*)** to access the contents of a reference

```rust
fn main() {
    let mut x = 5;
    {
        let y = &mut x;
        *y += 1;
    }
    println!("{}", x);
}
```

### Rules
- Any **borrow** must last for a scope no greater than that of the owner.
- one or more references (```&T```) to a resource
- exactly one mutable reference (```&mut T```)
- 跟**data race**概念相似

### Issues borrowing prevents
These rules prevent data races. What kinds of issues do data races cause?

1. Iterator invalidation
    ```rust
    fn main() {
        let mut v = vec![1, 2, 3];

        for i in &v {
            println!("{}", i);
            v.push(34);
        }
    }
    ```
    Get error: **v** is borrowed as immutable

2. Use after free
    ```rust
    fn main() {
        let y: &i32;
        {
            let x = 5;
            y = &x;
        }

        println!("{}", y);
    }
    ```
