/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let flag = x.toString();
    strLen = flag.length;
    
    flag = flag.substr(0, 1);
    
    let reversed = x.toString().split('').reverse().join('');
    
    console.log(flag);
    
    if (flag === '-'){
        reversed = reversed.substr(0, strLen-1);
        reversed = '-' + reversed;
    }
       
    reversed = parseInt(reversed);
    console.log(reversed, typeof reversed);
    
    if (reversed<=((-2) ** 31) || reversed >= (2 ** 31)-1) return 0;
    
    return reversed;
    
};
