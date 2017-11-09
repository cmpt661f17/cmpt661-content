//ToDo: organize these examples and place them in separate files

//Non-pure function (Side effect or involvement)
let name = "Samir";

function callMe(){
    console.log("So you should call me " + name);
}

//pure function
function callMe(name){
    return "so you should call me "+ name;
}
callMe(name);

//Higher Order Function
function getLength(str) {
    return str.length;
}

let lengths = ["bubble", "cloud", "rain", "water", "rainbow"].map(getLength);

console.log(lengths); // [6, 5, 4, 5, 7]


//Currying
function sumThree(a, b, c) {
    return a + b + c;
}

let curriedSumThree = curry(sumThree);
console.log( curriedSumThree(1)(2)(3) ); // 6
console.log( curriedSumThree(1,2)(3) ); // 6
console.log( curriedSumThree(1,2,3) ); // 6
console.log( curriedSumThree(1)(2,3) ); // 6

function curry(fn) {
    return function curried(...args) {
        return args.length >= fn.length ?
            fn.call(this, ...args) :
            (...rest) => {
                return curried.call(this, ...args, ...rest);
            };
    };
}

// Anonymous Functions
let square = function(a) {
    return a ** 2;
}

// or lambda expression
square = (a) => a ** 2;

// display true
console.log( typeof square === 'function' )

// First-Class Functions
let mathFuncs = [
    function(a) { return a * 2 },
    function(b) { return b * b },
    function(c) { return c + 2 }
];
console.log( mathFuncs[1](3) ); // => 9

// Higher-Order Functions
function doTwice(action) {
    action();
    action();
}

doTwice(function() {
    console.log('called!');
})

// Higher-Order Functions
function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    }
}

let times10 = multiplyBy(10);
console.log( times10(5) ); // 50

let numArray = [1,2,3].map( multiplyBy(10) );
console.log( numArray );


//Data Encapsulation through Closure
function makeCounter() {
    let i = 0;
    return function () {
        return ++i;
    }
}
let counter = makeCounter();
console.log( counter() ); // 1
console.log( counter() ); // 2

//Recursion
function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

function factorial(n) {
    if (n < 2)
        return 1;
    else
        return n * factorial(n - 1);
}

//Closure

