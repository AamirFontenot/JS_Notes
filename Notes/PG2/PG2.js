//Iteration/ loops

let list = ['Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

console.log('While loop')
//While loop
let i = 0
while (i < list.length) {
    console.log(list[i])
    i = i + 1
}
debugger;

console.log('For loop')
//For loop (Initialization; condition; increment) {body_Statement; }
for (let i = 0; i < list.length; i = i + 1) {
    console.log(list[i])
}
debugger;

console.log('For..In Loop')
//For..In loop
for (let i in list) {
    console.log(list[i])
}
debugger;


console.log('For..of loop')
//For.. of loop :l
for (let day of list){
    console.log(day)
}