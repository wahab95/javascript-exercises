const repeatString = function(txt,times) {
    let x=txt
    if (times < 0){
        return console.log("error");
        
    }
    else{
        for (let i = 1; i < times; i++) {
            x += txt
        
        }
        return x
    }
    
};


console.log(repeatString('hi ',10));

