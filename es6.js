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

//arrow functions
//can't use in constructors, handle "this" strangely
