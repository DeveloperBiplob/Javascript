//------------ Logical And OR using Shorthand ----------------//

var name = ''
var fullName = ''

if(name.length == 0){
    fullName = 'Biplob'
}else{
    fullName = name
}
console.log(fullName)



// Shorthand use in Or operator
// true side || false side

// jehetu variable ta Empty ti seta False return kore. 
// jodi value thakto ta hole true return korto.

var name = ''

var fullNameis = name || 'Biplob Jabery'
console.log(fullNameis)


// Shorthand use in And operator
// Condition && output

// jodi condition ture hoy ta hole output show korbe.
// condition false hole kichoi hobe na.

var isOk = true

isOk && console.log('Everything is Ok')

var result = (10 % 2 == 0) && 'Yes Its True'
console.log(result)