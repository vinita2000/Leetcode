/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if ((s.length)%2 != 0)return false;
    
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
    
    const stack = [];
    
    for (item of s){
        if (opening.indexOf(item) !== -1)stack.push(item);
        else if (closing.indexOf(item) !== -1){
            const lastItem = stack.pop();
            console.log(opening.indexOf(lastItem), closing.indexOf(item))
            if (opening.indexOf(lastItem) !== closing.indexOf(item))return false
        }
    }
    
    if (stack.length > 0) return false;
    
    return true;
};
