fn main() {
    fn fib(n: i32) -> i32 {
        if n <= 2 {
            return 1;
        } else {
            return fib(n - 2) + fib(n - 1);
        }
    }
    println!("{}", fib(20));

    let mut x : i32 = 4;
    let y = x;
    x = 9;
    println("{}", x);
    println("{}", y)
}
