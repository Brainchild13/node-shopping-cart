// const hobbies = ['sports', 'cooking'];
// for loop for array
// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);

// // spread operator to take all parts of array and copy them into new array
// const copiedArray = [...hobbies]
// console.log(copiedArray);

// Rest operator so that you can use more args than the original arrow function
// const toArray = (arg1, arg2, arg3) => {
// const toArray = (...args) => {
//     // return [arg1, arg2, arg3];
//     return args;
// };

// console.log(toArray(1,2,3,4));

// object destructuring
const person = {
    name: 'david',
    age: 45,
    greet() {
        console.log('hi, i am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age} = person;
console.log(name, age);


const hobbies = ['sports', 'cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
