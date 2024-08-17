const palindromes = function (string) {
    const word = string.split('');
    const wordrev = string.split('').reverse();

    console.log(`${word}\n${wordrev}`)

    if( word.join() === wordrev.join() ){
        return true;
    }
    else{
        return false
    }
};
console.log(palindromes('pass'))
// Do not edit below this line
module.exports = palindromes;
