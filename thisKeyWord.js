
const Ex1 = function foo1() {
    console.log(this.bar)

};

var bar = "globalBar"
var obj1 = { bar: "bar1", foo: foo1 };
var obj2 = { bar: "bar2", foo: foo1 };

console.log(Ex1); //globalBar
console.log(obj1.foo) //everything in Js is reference to object or the reference to a function


/*another example with precedece2*/


var o1 = {
    bar: "bar_1",
    foo: function () {
        console.log(this.bar)
    }

};

var o2 = {
    bar: "bar_2",
    foo: o1.foo
};

var foo = o1.foo;
var bar= "_globalbar"

/* now test the condition with the this keyword references */

/* this will reference to o1 object's foo funciton and reference to o1 object's foo function's context has bar: bar_1 */
foo(); //bar_1

console.log(o1.foo()) // bar_1

console.log(o2.foo()) //bar_2