const person = {
    name: 'david',
    age: 45,
    // have to use this format to use the 'this' method in the object otherwise undefined
    greet()  {
        console.log('hi i am ' + this.name);
    }
};

person.greet();