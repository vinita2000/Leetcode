/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let count = 0;
    s = s.trim();
    const str = s.split('').reverse().join('');
    
    console.log('*'+s+'*', '*'+str+'*');
    
    for (char of str){
        if (char === ' ') break;
        else count += 1;
    }
    return count;
};
