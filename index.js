// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
//   } 

// const gifts = ['teddy bear','drone','doll']
// function wrapGifts(gifts){
// for (let i = 0; i < gifts.length;i++){
//     console.log(`Wrapped ${gifts[i]} and added a bowl!`);
//   debugger;

// }
// return gifts
// }
// wrapGifts(gifts)
function writeCards(arr,event){
    const newArray = []
    for (let i = 0; i < arr.length; i++){
        newArray.push (`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
    }
return newArray
}
function countDown(num){
 
    while (num > -1)
    console.log (num--);
    ;
}