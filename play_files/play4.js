// async code and promises and callbacks

// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500);
// };

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve('Done!');
    }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log('hello');
console.log('hi');
