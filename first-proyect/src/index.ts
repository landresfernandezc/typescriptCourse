
//type 'npm tsc' in the termina
let helloWord: string = "Hello World";
console.log(helloWord);

//Primitive types

let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("star");
//let biggy: bigint = 24n;

// Instance Types
let regexp: RegExp = new RegExp("ab+c");

let array: Array<number> = [1, 2, 3];

let set: Set<number> = new Set([1, 2, 3]);

/** A first in first out collection */
class Queue<T> {
  private data: Array<T> = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T | undefined {
    return this.data.shift();
  }
}

let queue: Queue<number> = new Queue();

//Array and Tuples

let arrayE: number[] = [1, 2, 3];

//Usage

arrayE = [1];
arrayE = [1, 2, 3, 4, 5];
//arrayE = ['hello']; //Error

//Tuple
let tuple: [number, number] = [0, 0];

//Usage

tuple = [1, 1];
tuple = [1, 6];
//tuple = [5]; //Error: must be 2 items
//tuple = [5,4,3]; // Error must be 2 items

// Object types and Type Aliases

let center: { x: number; y: number } = {
  x: 0,
  y: 0,
};

type Point = { x: number; y: number };

let centerAlias: Point = {
  x: 0,
  y: 0,
};

//Const declarations
const point: Point = { x: 0, y: 0 };
//can't reasigned a variable that has been declared with const
//point= {x:0,y:0}; Error
//All other behaviours are the same as let
//you can add the property readonly 
// readonly x:number for example
point.x = 1;

//Functions

function add(a: number, b: number): number {
  return a + b;
}
function log(message: string): void {
  console.log(message);
}

function sum(...values: number[]) {
  return values.reduce((previous, current) => {
    return previous + current;
  });
}

sum(1, 2); //3
sum(1, 2, 3); //6

type Add = (a: number, b: number) => number;

let addAlias: Add;

addAlias = function (a: number, b: number): number {
  return a + b;
};

addAlias = (a, b) => a + b;

//Structural typing 
type User= {id:string};
type Product = {id: string};

let user: User = {id:'wwwww'};
let product: Product = {id:'wwwwwaaaa'};
user = product;
product= user;

type Point2D = { x: number, y: number};
type Point3D = { x: number, y: number,z:number};

let point2D: Point2D ={ x: 0, y: 0};
let point3D: Point3D ={ x: 0, y: 0, z:0};

/*Extra info is ok*/
point2D=point3D;
function takesPint2D(point:Point2D){}
takesPint2D(point2D)

/*Less info is not ok
point3D=point2D;
function takesPint3D(point:Point3D){}
takesPint3D(point2D);*/

//Classes

class Animal{
  private name: string;
  constructor(name:string){
    this.name =name;
  }
  public move(distanceInMeters:number):void{
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
let cat= new Animal('Cat');
cat.move(10);
//cat.name= 'Dog'; Error because it's private

class Bird extends Animal{
  fly(distanceInMeters:number){
    //console.log(`${this.name} flew ${distanceInMeters}m.`);
  }
}

//Target Compiler Option

//It's in the tsconfig option a for what version js It's going to compile


//Generics
//A FIFO collection
class QueueGenerics<T> {
  data:any= [];
  push(item:T){
    this.data.push(item)
  }
  pop():T{
    return this.data.shift();
  }
}

// class NumberQueueGenerics extends QueueGenerics{
//   push(item:number){
//     super.push(item)
//   }
//   pop():number{
//     return super.pop();
//   }
// }

const queueGeneric= new QueueGenerics<number>();
queueGeneric.push(13);
queueGeneric.push(12);

console.log(queueGeneric.pop().toPrecision(1));
console.log(queueGeneric.pop().toPrecision(1));

//Special types : any and unknown

let exampleAny:any;
let exampleunknown:unknown;

//any
exampleAny=123;
exampleAny='Hello';
//unknown
exampleunknown=123;
exampleunknown='Hello';

//any
exampleAny.allows.anything.you.can.imagine();
let anySetBool: boolean = exampleAny;
//unknown
//You have to validate the type
if(typeof exampleunknown=== 'string'){
  exampleunknown.trim();
}
if(typeof exampleunknown=== 'boolean'){
  let unknownsetBool:boolean = exampleunknown;
}
//Type casting
//Type coercion
let leet;
leet='1234'
let number= +leet;
console.log(number===1337);//false
//Modules
//export function isPalindrome in 'utils.ts'
//import {isPalindrome} from './utils'
//import * as utils from './utils'

//Type declarations
declare const process: any;
//npm i @types/node

import fs from 'fs';
fs.writeFileSync('hello.txt','Hello world');

//Async await
const delay =(ms:number) => new Promise(res => setTimeout(res,ms));
const mainAsync = async ()=>{
  await delay(1000);
  console.log('1s')
}
mainAsync();

//ts-node


//Lexical this

class Person {
  private _age : number;
  constructor(_age:number){
    this._age=_age;
  }
  growOld =() =>{
    this._age++;
  }
  age(){
    return this._age;
  }
}

const person=new Person(0);
//person.growOld();
const growOld= person.growOld;
setTimeout(person.growOld,1000);
growOld();
console.log('age: ',person.age());

//Readonly modifier

//readonly namepram:type;

//Union types

// It's a set of type separated for | for example 

//function fCommandLine(input:string|string[])
// You can used like a type:
type Padding = number | string;
//Literal types

let direction:'North'|'South'|'West';
type DiceValue= 1|2|3|4|5|6;
function rollDice(){
  return (Math.floor(Math.random()*6)+1) as DiceValue;
}

//Type Narrowing
function padLeft(value: string, padding:number|string){
  if(typeof padding === 'number'){
    return Array(padding +1).join(' ') +value;
  }
  if(typeof padding === 'string'){
    return padding+value;
  }
  throw new Error(`Expected number or string, got ${padding}`)
}
padLeft('Hello world',4);
padLeft('Hello world','   ');
padLeft('Hello world','---');

class Cat{
  mouth:string='little';
  meow(){
    console.log('meow');
  }
}
class Dog{
  mouth:string='big';
  tongue:string='large tongue';
  bark(){
    console.log('woof')
  }
}
type AnimalClass= Cat | Dog;
function speak(animal:AnimalClass){
  if(animal instanceof Dog && 'mouth' in animal && animal.mouth === 'big'){
    animal.bark()
  }
  if(animal instanceof Cat && 'mouth' in animal && animal.mouth === 'little'){
    animal.meow()
  }
}
///Discriminated Unions
// animal.mouth === 'big'|| animal.mouth === 'little'
//Same characteristic, different value

//Class paramether Properties
//constructor(public name:string,public age:number)

//Strict compiler option
//1. type are stricted
//2. Have to initialize params in the constructor
//3. If some variable do not exist thrown error variable not found

//Null vs Undefined
null==undefined;
//Intersection Types
// type First={x:number,y:number}
//type Second=First & { z:number};
// contact(sections:First & Second);
// contact({x:0,y:0,z:0})

//Optional Modifier

type Person1 ={
  name:string,
  email: string,
  phone?: string
}
//In this case phone it's optional

//Non-null assertion operator

//object!.param
//Putting an exclamation mark after the value TS think it's null or undefined
//console.log(person.email!)


//Interfaces similar to type
interface Image2D{
  x:number,
  y:number
}
interface Image3D extends Image2D{
  z:number;
}
//Interface declaration merging
// Express Base
export interface Request{
  body:  any;
}
// Express JSON
export interface Request{
  json: any;
}
// Our App
function handleRequest(req:Request){
  req.body;
  req.json;
}
//Types vs Interfaces
//interface don't support short hand sintax and types union or just a primitive value like
type InputOnChange= (newValue: InputValue)=>void;
type InputValue= string;
type InputType = 'text' | 'email';
export type InputProps = {
  type: InputType,
  value: InputValue,
  onChange: InputOnChange,
}
//Types functionalities
  //Unions
  //Intersections
  //Primitives
  //ShoetHandFunctions
  //Advanced type Functions
// Interface
  // Declaration merging
  //Familiarity(extends)
//Never type
let area:never;
//It's similar to any


//Definite Assignment Assertion
let dice!:number;
//To print a variable that's assigned in a function in another context and printed in the main context


// use defined type Guards
//function isRectangle(shape:Shape):shape is Rectangle{}

//Assertion functions
// function assertDate(value: unknown):asserts value is Date {}

//Function overloading
function reverse(string:string):string;
function reverse(stringArray:string[]):string[];

//normal function
function reverse(stringOrArray:string | string[]){
  if(typeof stringOrArray == 'string'){
    return stringOrArray.split('').reverse().join('');
  }else{
    return stringOrArray.slice().reverse();
  }
}
//Call Signatures


//Abstract classes
abstract class Command {
  abstract commandLine():string;
  execute(){
    console.log('Exceuting:', this.commandLine())
  }

}
//Index Signature
const strs = {
  hello: 'world'
};
console.log(strs['hello']);
const nums = {
  1337: 'leet'
};

console.log(nums[1337]);// leet

type Dictionary = {
  [key:string]: boolean,
}

//example
type Person2 = {
  displayName: string,
  email: string
};

type Person2Dictionary = {
  [username:string]:Person2 | undefined,
}
const persons: Person2Dictionary = {

}
persons['john'] = {displayName: 'John Doe',email: 'john@example.com'};
console.log(persons['john']);
delete persons['missiong'];

const result= persons['missing'];
//console.log(result,result.email);


//Readonly Arrays and Tuples
//With the readonly property the start array not mutated with the sort function and the sorted 
//require to slice the input and sort after
function reverseSorted(input: readonly number[] ): number[] {
  return input.slice().sort().reverse();
}
const start = [1,2,3,5,4];
const result1 = reverseSorted(start);

console.log(result1)// [5,4,3,2,1]
console.log(start)// [1,2,3,4,5]

type Point1 = readonly [number,number];
//Avoid mutated param object in function same effect


//Double assertion
point3D=point2D as unknown as Point3D; 
// unknown can be anything and can be Point3D

//Const assertion

function layout(settings:{
  align: 'left' | 'center' | 'right',
  padding:number,
}){
  console.log('Performing layout:',settings);
}
const example = {
  align:'left' as const,
  padding:0,
};
layout(example);
//Generic constraint 
type NameFields= {firstName:string,lastName:string};
function addFullName<T extends NameFields>(obj:T):T & {fullName:string}{
  return {
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
  }
};

const john = addFullName({
  email: 'john@example.com',
  firstName: 'John',
  lastName: 'Doe'
});
console.log(john.email)
console.log(john.fullName)//Generic constraint
//Typeof type operator
  //type  response= typeof personalResponse


//Lookup types
  // export type submitRequest
  //submitRequest['personal']['data']
//keyof type operator
  // keyof padding like 'left' | 'center' | 'right'
  // keyof classname = (type union) => 'left' | 'center' | 'right'
//Conditional types
type IsNumber<T> =
T extends number
? 'number'
: 'other';

type WithNumber = IsNumber<number>;
type WithOther = IsNumber<string>;

//Javascript
const isNumber= (value:unknown) =>
  typeof value ===  'number'
? 'number'
: 'other';

const withNumber= isNumber(123);
const withOther= isNumber('hello');

export type TypeName<T> =
T extends string ? 'string' :
T extends number ? 'number' :
T extends boolean ? 'boolean' :
T extends undefined ? 'undefined' :
T extends symbol ? 'symbol' :
T extends bigint ? 'bigint' :
T extends Function ? 'Function' :
T extends null ? 'null' :
'object';

function typeName<T>(t:T):TypeName<T>{
  if(t===null){return 'null' as TypeName<T>;}
  return typeof t as TypeName<T>;
}

//Conditionals with unions and never

//infer keyword
// infer Member

//Mapped types
type ReadOnlyPoint<T>= {
  readonly [Item in keyof T ]:T[Item];
}
const cero:ReadOnlyPoint<Point>={
  x:0,
  y:0
}
//Mapped types modifiers
//If you add - or + before the keyword that keyword funcionality dissapear
export type Modifier ={
  readonly x: number,
  y?:number
}
export type Mapped<T> = {
  -readonly [P in keyof T ]-?:T[P]
};
export type Result = Mapped<Modifier>;

//Partial<T>
//Required<T>
//Readonly<T>