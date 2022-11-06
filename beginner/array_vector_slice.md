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


# Vector
A ```Vector<T>``` is a resizable array of elements of type ```T```, allocated on the heap.

```rust
fn main() {
    let mut primes = vec![2, 3, 5, 7];
    primes.push(11);
    primes.push(13);

    let rows = 512;
    let cols = 512;
    let pixel_buffer = vec![0; rows * cols];
    let pixel_buffer2 = new_pixel_buffer(512, 512);

    // build form range
    let v: Vec<i32> = (0..5).collect();

    // palindrome
    let mut palindrome = vec![0, 1, 2]
    palindrome.reverse();
}

fn new_pixel_buffer(rows: usize, cols: usize) -> Vec<u8> {
    vec![0; rows * cols]
}
```

# Slice
A slice, written ```[T]``` without specifying the length, is a region of an array or vector.

Slice are always passed by  **reference**.

```rust
fn main() {
    let v: Vec<f64> = vec![0.0, 0.707, 1.0, 0.707];
    let a: [f64; 4] = [0.0, 0.707, 1.0, 0.707];

    let slice_v: &[f64] = &v;
    let slice_a: &[f64] = &a;
}
```

slice 包含 2個值
- a pointer to the slice's first element
- the number of elements in the slice.

function use the slice
```rust
fn print(n: &[f64]) {
    for elt in n {
        println!("{}", elt);
    }
}

fn main() {
    let v: Vec<f64> = vec![0.0, 0.707, 1.0, 0.707];
    let a: [f64; 4] = [0.0, 0.707, 1.0, 0.707];

    print(&a); // works on arrays
    print(&v); // works on vectors
}
```
