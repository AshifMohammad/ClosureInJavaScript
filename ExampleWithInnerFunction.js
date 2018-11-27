var addTo = function(external){
    var add= function(inner){
        return external + inner
    }
    return add;
}

//console.log(addTo(3)) //this will be undefined cuz inner variable is still undefined

//Closure is a property which stores the variable out the outer funciton and returns 

//console.dir(addTo(3));
var addThree = new addTo(3.1); //passing inner variable to add function which is a inner function of addTo parent fucniton
console.dir(addThree);


console.log(addThree(2.9));
//output : 6