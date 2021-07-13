/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
   let flag = 0;
    let n = digits.length;
    
    for (let i=n-1; i>=0; i--){
        if (flag === 1) break;
        if (digits[i] + 1 > 9){
            digits[i] = 0;
            if (i === 0) digits.unshift(1);
        }
        else{
            digits[i] += 1;
            flag = 1;
        }
    }
    
    return digits;
};
