/* using fat arrow funciton */
let outer = function (ext){
    const inner = (inn) => {
    return inn + ext;
    }
    return inner;
    }
    
console.log(outer())    