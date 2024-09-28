let a: number = 10;
let b: string = 'String'
let bool: boolean = false


let nullVar: null = null

let undef: undefined = undefined


// objects
let now: Date = new Date()


// Array
let colors: string[] = ['red', 'blue', 'green']
let numbers: number[] = [1, 2, 3, 4]


// Classes
class Car {

}

let car: Car = new Car()


// Object literal
let point: { x: number, y: number } = {
  x: 10,
  y: 20
}


// Function
const logNumber: (i: number) => void = (i: number) => console.log(i)



// When to use type annotations

// 1. function that returns any type
const json: string = '{ x: 10, y: 20 }'
const points: { x: number, y: number } = JSON.parse(json)


// 2. Declare a variable and initialise it later.
// 3. Variable whose type can not be inferred correctly.
let numberAboveZero: boolean | number = false
