const convertToCelsius = function(x) {
  return ((x-32) * (5/9)).toFixed(1) ;
};

const convertToFahrenheit = function(x) {
  return (x * (9/5) + 32).toFixed(1)
}; 
//°

//x °C ≘ (x × ⁠9/5⁠ + 32) °F 	|| x °F ≘ (x − 32) × ⁠5/9⁠ °C 

console.log(convertToCelsius(-100))

console.log(convertToFahrenheit(-10))

