const fibonacci = function(num) {
    let sum;
    if(num < 3 && num > 0){
        sum = 1;
    }
    else if(num < 0){
        return -1
    }
    else if (num === 0 ){
        return 0
    }
    else{
        sum = (fibonacci(num-1)) + (fibonacci(num-2))
    }
    return sum;
};
console.log(fibonacci(8))


// Do not edit below this line
module.exports = fibonacci;

