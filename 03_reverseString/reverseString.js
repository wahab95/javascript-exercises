const reverseString = function(txt) {
    const len = txt.length;
    let revTxt ='';
    for( let i = len -1 ; i > -1 ; i--){
        revTxt += txt.at(i)
    }
    
    return revTxt;

};



console.log(reverseString("123! abc! Hello, Odinite."));
