/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let dct = {}; let maxOdd = 0;
    let maxLen = 0; let maxKey = '';

    for (let i=0; i<s.length; i++){
        if (s[i] in dct) dct[s[i]] += 1;
        else dct[s[i]] = 1;
    }  
    // console.log(dct);
    for (key in dct){
        if (dct[key]%2 != 0 && dct[key] > maxOdd){
            maxOdd = dct[key];
            maxKey = key;
        }
    }
    for (key in dct){
        console.log(maxLen);
        if (dct[key]%2 === 0){
            maxLen += dct[key];
        }
        else{
            if (key != maxKey) maxLen += dct[key] - 1;
            else maxLen += dct[key];
            
        }
    }
    
    const output = maxLen;
    console.log(output);
    return output;
};
