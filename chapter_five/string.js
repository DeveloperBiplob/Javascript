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
// var a = 'abc'
// var b = 'bcd'

// console.log(a < b)

// je kono small later Capital later e chaye boro.
// console.log('z' > 'Z')

// string er sathe number compare korle string ta numbere convert kore compayer korbe.
// console.log('001' == 1) // true return korbe.


//******** String Method *******/
// concate() // akadik string ke jora lagay
// substr() // koto number theke show korbe r koto ta show korbe. secnond peramiter optional.
// charAt() // kono index e kon value ta ache seta dekar jonno.
// startWith() // true, flase return kore. console.log(c.startsWith('I')) 
                //jodi string ta 'I' diye suro hoy ta hole true return korbe noyto false return korbe.
// endWith() // condition check korbe pass kora value diye ses hoiche kina.
// toUpperCase()
// toLowerCase()
// trim() // spase remove kore. "    biplob   " ai rokom
// split() // ata kono akta string ke benge array kore, r seta kisher upor vitti kore bangbo ta bole dite hobe.

// var a = 'I am'
// var b = 'Biplob Jabery'
// var c = a.concat(' ', b)
// console.log(c)
// console.log(c.substr(5))
// console.log(c.charAt(6))
// console.log(c.startsWith('I'))
// console.log(c.startsWith('I am'))
// console.log(c.split(' '))


//------------ String Length----------//

var str = 'Biplob Jabery'
var length = 0;
while(true){
    if(str.charAt(length) == ''){
        break
    }else{
        length++
    }
}

console.log(length)

var str2 = 'Biplob'
console.log(str2.length)