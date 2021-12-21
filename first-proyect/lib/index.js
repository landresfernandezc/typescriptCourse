"use strict";
let helloWord = 'Hello World';
console.log(helloWord);
//Primitive types
let isPresent = false;
let magic = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
//let biggy: bigint = 24n;
// Instance Types
let regexp = new RegExp('ab+c');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
/** A first in first out collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() {
        return this.data.shift();
    }
}
;
let queue = new Queue();
//Array and Tuples
let arrayE = [1, 2, 3];
//Usage
arrayE = [1];
arrayE = [1, 2, 3, 4, 5];
arrayE = ['hello'];
//Tuple
let tuple = [0, 0];
