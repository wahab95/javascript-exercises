const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(...x) {
	t = 0;
  x.forEach((x)=> t += x);
  return t;
};

const multiply = function(x,y) {
  return x * y;
};

const power = function(x,y) {
	let temp = x;
  for(let i = 1; i < y ; i++){
    temp *=x;
  }
  return temp;
};

const factorial = function(x) {
	let i = x;
  let t = 1;

  for( i ; i > 0 ; i--){
       t *= i;
  }
  return t;
};

console.log(factorial(10));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
