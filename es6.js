//let is block scoped

function func1() {
  if (true) {
    var tmp = 123
  }
  console.log('func1 tmp', tmp)
}

// func1()

//more fun with let
(function func2() {
  let foo = 5
  if (true) {
    let foo = 10
    console.log('foo inside if block', foo)
  }
  console.log('func2 with let', foo)
}())
