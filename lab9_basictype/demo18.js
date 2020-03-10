var token = 'abc'
var y = function () {
    var token = 'def'
    console.log('inside', token)
}
console.log('first outside', token)
y()
console.log('second outside', token)
var x1 = function (x, y) {
    return x * y
}
var x2 = (x, y) => { return x * y }
var x3 = (x, y) => x * y
console.log(x1(3, 4))
console.log(x2(6, 7))
console.log(x3(8, 9))