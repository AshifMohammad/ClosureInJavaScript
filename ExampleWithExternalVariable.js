var passed = 3
const addTO = function(){
   let inner = 2
  
   return passed + inner
   
};
var passed = 5
console.log(addTO());
console.dir(addTO);
var passed = 5.4


// if we exand the console and check the closure.. it under closure object you will see the passed variable >> it hoists from bottom to top