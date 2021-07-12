/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
     // return haystack.indexOf(needle);
    
    let flag = -1;
    const hLen = haystack.length;
    const nLen = needle.length;
    
    if (nLen === 0) return 0;
    
    if (nLen > hLen) return -1;
    
    if (nLen === hLen){
        if (haystack !== needle) return -1;
    }
    
    for (let i=0; i<hLen; i++){
       let temp = haystack.slice(i, i+nLen);
        if (needle === temp) return i;
    }
    
    return -1;
};
