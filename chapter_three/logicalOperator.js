// -----------Logical Operators-----------//

// && = And Operator, || = Or Operator, ! = Not Operator

// A && B
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// A || B
// true || true = true
// true || false = true
// false || true = ture
// false || false = flase

var a = 10
var b = 20
var b = 30
var d = 40

if(a > b && b > d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log('At least one condition is false')
}

if(a > b || d > b){
    console.log('A is greater than B Or C is greater than D')
}else{
    console.log('At least one condition is false')
}

var check = !(a > b)
console.log(check)

var check = !!(a > b)
console.log(check)