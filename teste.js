function restParamaterFunction(x, y, ...a) {
    return (x + y) * a.length
}
console.log(restParamaterFunction(1, 2, 'hello', true, 7));