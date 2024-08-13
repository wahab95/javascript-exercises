const removeFromArray = function(arr, ...r) {
    let newarr = [];
    const len = arr.length;
    for (let i = 0; i < len ; i++) {
        if (r.includes(arr[i])){
            continue;
        }
        else{
            newarr.push(arr[i]);
        }    
        
    }
    return newarr;
};
x = removeFromArray( [1,2,3,4,5,7] ,7,1);
console.log(x)
