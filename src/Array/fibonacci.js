let fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;
for (let i = 2; i < 19; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}





