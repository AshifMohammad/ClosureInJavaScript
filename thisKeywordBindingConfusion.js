function foo() {

var bar = "bar"
baz();
}

function baz(){
    console.log(this.bar)
}

var bar= "_globalBar";

foo(); //global rule will apply to foo(); execution
/* what would be the output of the foo(); and why? */