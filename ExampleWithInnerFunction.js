const addTo = (external) => {
    const add = (inner) => {
        return external + inner
    }
    return add;
}

console.log(addTo(3)) //this will be undefined cuz inner variable is still undefined

//Closure is a property which stores the variable out the outer funciton and returns 

console.dir(addTo(3))


    //Console output :

//     (inner)=> {
//     return external + inner
// }
//  add()
//  arguments: (...)caller: (...)length: 1name: "add"__proto__: ƒ()[[FunctionLocation]]: 
//  [Scopes]]:  Scopes[2]
//  0: Closure(addTo)
//     external: 3
//   1: Global { type: "global", name: "", object: Window }