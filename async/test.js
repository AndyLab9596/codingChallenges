async function fetchApi() {
    console.log(789);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(123);

    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('aaaaa');
}

async function fetchApi2() {
    const res1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('dddddd');
}

function testing() {
    console.log(0);
}

fetchApi();

fetchApi2();

testing()

console.log(456);

console.log('bbbbbbbb');

setTimeout(() => {
    console.log('ccccc');
}, 100);

/**
 * 789
 * 0
 * 456
 * bbb
 * ccccc
 * 123
 * aaaaa
 * dddddd
 * ccccc
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */