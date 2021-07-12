/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let common = strs[0];
    
   for (str of strs){
       common = findCommonPrefix(common, str);
   }

    console.log(common);
    return common;
    
};

const findCommonPrefix = (str1, str2) => {
    const l1 = str1.length;
    const l2 = str2.length;
    const n = l1<l2?l1:l2;
    let cPrefix = '';
    
    for (let i=0; i<n; i++){
        if (str1[i] === str2[i]) cPrefix += str1[i];
        else break;
    }
    
    // console.log(cPrefix);
    return cPrefix;
}
