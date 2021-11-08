//-----------While Loop-------------//

var i = 0
// while(i <= 10){
//     console.log(i)
//     i++
// }

var isRunnnig = true
while(isRunnnig){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand == 9){
        console.log('Winndr Winndr Chicken Dinner')
        isRunnnig = false
    }else{
        console.log('You have got ' + rand)
    }
}
