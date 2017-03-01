//let is block scoped

function func1() {
  if (true) {
    var tmp = 123
  }
  console.log('func1 tmp', tmp)
}

// func1()

//more fun with let
// (function func2() {
//   let foo = 5
//   if (true) {
//     let foo = 10
//     console.log('foo inside if block', foo)
//   }
//   console.log('func2 with let', foo)
// }())

//const
// const MAX_CAT_SIZE = {weight: 3000} //all caps for constant
// MAX_CAT_SIZE.weight = 5000 //can change values in object, but not that it is an object
// MAX_CAT_SIZE.height = 20 //can add key: value pairs too
// console.log('max cat size', MAX_CAT_SIZE)

/*************arrow functions - great for anon functions**************/
//can't use in constructors, handle "this" strangely
//these 2 functions are the same:
// var reflect = function(value) {
//   return value
// }

// const reflect = value => value //one argument and return

// //slightly different
// const reflect2 = (value, num) => value //2 args and return

// //no arg
// const reflect = () => 1+2

// var numbers = [1,2,3,4,5,6]

// var timesTwo = numbers.map(function(number){
//   return number*2
// })

// let timesTwo = numbers.map((number) => number * 2)

// console.log('timesTwo', timesTwo)


/*******something random that Joe started*********/
// function FooCtrl(FooService) {
//   this.foo = 'hello'
//   FooService.doSomething(function(response) {
//     this.foo = response
//   }).bind(this)
// }

//object literal value shorthand
// const wow = 'hi there',
//       es6 = 'ES6',
//       myNum = () => console.log('howdy')

// let myOldObj = {
//   wow: wow,
//   es6: es6,
//   myNum: myNum
// }

// let myNewObj = {wow, es6, myNum}
// console.log('myNewObj', myNewObj)

/**********destructuring assignments*********/
// let dog = {
//   name: 'Murph',
//   breed: 'Aussie',
//   speak: () => 'woof'
// }

// // const myDog = dog.name //old way

// const {name, speak} = dog //destructuring => variable called name = dog.name, variable named speak = dog.speak

// const {name: myName, speak} = dog //renames variable to myName

// const [a,b] = [5,10]
// console.log('a and b', a, b)

// let x = [1,2,3,4,5]
// // let [y,z, ...theOthers] = x //... - rest element has to be last in array
// let [,,...theOthers] = x
// console.log('theOthers', theOthers)

// let countries = ['moldova','ukraine']
// let otherCountries = ['usa', 'japan']

// let meldedCountries = [...countries, ...otherCountries]
// console.log('melded', meldedCountries)


//for loop
var arr = ['1','2','3']
for(var i = 0, length1 = arr.length; i < length1; i++){
  var elem = arr[i]
  console.log('elem', elem)
}

//forEach
arr.forEach(function (elem){
  console.log('elem', elem)
})

//for of
for(let [index, value] of arr) {
  console.log('elem', elem)
}
