var validPalindrome = function(s) {
    
    let i = 0; let j = s.length-1;
    let n = s.length;
    
    let reversed = s.split('').reverse().join('');
    if (reversed === s) return true;
    
    let flag = false; let s1 = ''; let s2 = '';
    
    while(i<j){
        if (s[i] != s[j]){
            // deleted i th char
            let firstPart = s.slice(0, i);
            let lastPart = s.slice(i+1, n);
            s1 = firstPart + lastPart;
            
            firstPart = s.slice(0, j);
            lastPart = s.slice(j+1, n);
            s2 = firstPart + lastPart;
            
            break;
         }
        else {
            i += 1;
            j -= 1;
        }
    }
    
    let reversed1 = s1.split('').reverse().join('');
    let reversed2 = s2.split('').reverse().join('');
    console.log(s, reversed, s1, s2);
    if (reversed1 === s1 || reversed2 === s2) return true;
    else return false;
    
};
