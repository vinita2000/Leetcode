/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

var findContentChildren = function(g, s) {
    
    g.sort((a, b)=>a-b);
    s.sort((a, b)=>a-b);
    
    let i=0; j=0;
    let gLen = g.length;
    let sLen = s.length;
    let cnt = 0;

    while (i<gLen && j<sLen){
        if (s[j] >= g[i]){
            cnt += 1;
            i += 1;
            j += 1;
        }
        if (s[j] < g[i]){
            j += 1;
        }
    }
    
    console.log(cnt);
    return cnt;
    
};
