/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let dct = { 'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000 };
    
    let total = 0;
    
    for (let i=0; i<s.length-1; i++){
        // console.log(i, dct[s[i]], dct[s[i+1]]);
        if (dct[s[i]] < dct[s[i+1]]){
            total -= dct[s[i]];
        }
        else if (dct[s[i]] >= dct[s[i+1]]){
            total += dct[s[i]];
        }
        // console.log(total);
    }
    
    total += dct[s[s.length-1]];
    
    console.log(total);
    return total
    
};
