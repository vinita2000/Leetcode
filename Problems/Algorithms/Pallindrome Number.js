/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let input = x.toString();
    let reversed = input.split('').reverse().join('');
   
    if (input === reversed) return true;
    else return false;
};
