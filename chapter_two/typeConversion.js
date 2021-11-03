//--------- Type Conversion ------------/

var str = '1000'
var n = 10

console.log(Number.parseInt(str))
console.log(n.toString())

console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))

// Falsy Value ----
// Ai value gulo ke javaScript compiler Falsy value dore nibe, baki shob True value.
// ''
// 0
// null
// undefined
// NaN

console.log(Boolean(''))
console.log(Boolean('biplob'))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(Boolean(0))
console.log(Boolean(2454))

// String(), Number(), Boolean() like of constructor