# ClosureInJavaScript
This repo will explain with example the Closure.
``Just because You broke up with me, Doesn't mean i broke up with you ``

## Closure with the external variable accessed in the function
```
var passed = 3
const addTO = function(){
   let inner = 2
  
   return passed + inner
   
};
var passed = 5
console.log(addTO());
console.dir(addTO);
var passed = 5.4
```
``if we exand the console and check the closure.. it under closure object you will see the passed variable >> it hoists from bottom to top``

## Closure with the inner function accessed in the function
`` a function returns another *inner function*  with preserved variable of outer function in *closure* property of the JavaScript``

```
*JavaScript*
const addTo = (external) => {
    const add = (inner) => {
        return external + inner
    }
    return add;
}

console.log(addTo(3)) //this will be undefined cuz inner variable is still undefined

//Closure is a property which stores the variable out the outer funciton and returns 

console.dir(addTo(3))


    Console output :

   (inner)=> {
     return external + inner
      }
add()
arguments: (...)caller: (...)length: 1name: "add"__proto__: ƒ()[[FunctionLocation]]: 
[Scopes]]:  Scopes[2]
0: Closure(addTo)
external: 3
1: Global { type: "global", name: "", object: Window }
```