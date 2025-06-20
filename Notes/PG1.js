//Im stupid and I accidently deleted everything :L So I am starting again from module 2

//Most JS code is made with data types. If there are more discovered they will be added to the list.
// They will be listed down below.

console.log (5,typeof 5);
console.log(5.32, typeof 5.32);
console.log(5n, typeof 5n);
console.log('Hello', typeof 'Hello');
console.log(null, typeof null);
console.log(undefined, typeof undefined);
console.log(Symbol, typeof Symbol);
console.log(Object, typeof Object);
console.log(Function, typeof Function);
console.log(Map, typeof Map);
console.log(Set, typeof Set);
console.log(true,typeof true);
console.log(false, typeof false);
debugger;

//From where I left off we were dealing with if statements and how to use them

let Seceretvalue = Math.floor(Math.random() *5);

if (Seceretvalue === 0){
    console.log('Zero')
}else if (Seceretvalue === 1) {
    console.log('One')
} else if (Seceretvalue === 2) {
    console.log('Two')
} else if (Seceretvalue === 3) {
    console.log('Three')
} else {
    console.log('Four')
}
debugger;

//Now we look at switches That make the process of the if statement above easier to write.
//The switch below does the same thing as the if statements above.

switch (Seceretvalue) {
    case 0:
        console.log('Zero');
        break;
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    case 4: //I could also replace the last case with default which would take the position of all other values not include above it.
        console.log('Four');
}
debugger;

//Another way to do the same thing would be to make a map or an object and do What i did below.
let dict = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four'
}

console.log(dict[Seceretvalue]);
