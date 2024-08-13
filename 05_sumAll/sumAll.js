const sumAll = function(x,y) {
    let sum=0;
    if (x < 0 || y < 0){
        return "error";
    }
    else if ( (!Number.isInteger(x) || !Number.isInteger(y))){
        return "error";
    }
    else if (y>x){
        for (x ; x <= y ; x++) {
            sum +=x;
            
        }
        return sum;
    }
    else{
        for (y ; y <= x ; y++) {
            sum +=y;
            
        }
        return sum;
    }

};

console.log(sumAll(123, 1))
