var diStringMatch = function(s) {
    
    let n = s.length;
    let i = 0;
    let j = n;
    let arr = [];
    
    for (let k=0; k<n; k++){
        if (s[k] === 'I'){
            arr.push(i);
            i += 1;
        }
        else if (s[k] === 'D'){
            arr.push(j);
            j -= 1;
        }
    }
    arr.push(i);
    
    console.log(arr);
    return arr;
    
};
