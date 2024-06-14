// object - key value pairs
// let student = {
//         name : "Akbarjon",
//         age : 16,
// }

// console.log( student ) ;
// console.log( student.age );

// // array - index value pairs 
// let fruits = ["apple", "banana", "ananas", "apricot" ]

// console.log(fruits );
// console.log( fruits[3] );
// let array = ["john", 15, true, null, {a:20}, [100,200], {address: ["Tashkent", "Uzbekistan"]} ]
// console.log( array );
// console.log(array [6].address[1])


let count = document.querySelector(" .count")

let offset = 0 

function inc(){
        offset++
        count.innerHTML = offset
}

function reset(){
        offset = 0
        count.innerHTML = offset
} 

function dec(){
        offset--
        count.innerHTML = offset
}








