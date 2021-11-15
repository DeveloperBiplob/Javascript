//-------- String -----------//

// var str = 'Something' // string literal
// var str2 = String('something') // string constructor

// var n = 10
// console.log(String(n))


//**** Escape Notation

// var str = "This is a 'String'"

// var str2 = "This is a \'String\'" // Escape Notation. \' \' = cotetion print kore
// var str3 = "This is a \nString" // Escape Notation.  \n = new line create kore
// var str3 = "This is a \tString" // Escape Notation.  \t = tabe create kore
// var str4 = "This is a \\String" // Escape Notation.  \ = \ print kore

// console.log(str3)



//******** String Comparison ******* //
// Javascript Use Lexicographic System to Compare to String.

// a, b, c ++ ai vabe jeta age seta boro, tar mane holo 'b' theke 'a' boro.
var a = 'abc'
var b = 'bcd'

console.log(a < b)

// je kono small later Capital later e chaye boro.
console.log('z' > 'Z')

// string er sathe number compare korle string ta numbere convert kore compayer korbe.
console.log('001' == 1) // true return korbe.
