# Array 

### Declaring and Initializing Arrays
```rust
fn main(){
    let arr1 = [10,20,30,40];
    let arr2:[i32;4] = [10,20,30,40];
    
    let arr3:[i32;4] = [-1;4];
    // [-1, -1, -1, -1]
}
```

### Access Elements of Array
```rust
fn main() {
    let colors = ["red", "green", "blue"];
    
    println!("1st Color: {}", colors[0]);
    println!("2nd Color: {}", colors[1]);
    println!("3rd Color: {}", colors[2]);
}
```

### Loop through an array
```rust
fn main() {
    let lang = ["Rust", "Java", "Go", "Python"];
    for i in 0..lang.len() {
        println!("{}", array[i]);
    }

    // use iterator
    for element in lang.iter() {
        println!("{}", element);
    }
}
```


