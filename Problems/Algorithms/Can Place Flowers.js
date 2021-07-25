/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let i = 1;
    let lenF = flowerbed.length;
    
    if (lenF === 1 && flowerbed[0] === 0) {
        flowerbed[0] = 1;
        n -= 1;
    }

    if (lenF >= 2 && flowerbed[0] === 0 && flowerbed[1] === 0){
        flowerbed[0] = 1;
        n -= 1;
        i += 1;
    }
  
    while(i<lenF-1){
        if (flowerbed[i-1] === 0 && flowerbed[i] === 0 && flowerbed[i+1] === 0){
            flowerbed[i] = 1;
            n -= 1;
            i += 2;
        }
        else i += 1;
    }

    if (lenF>2 && flowerbed[lenF-1] === 0 && flowerbed[lenF-2] === 0) n -= 1;
    
    if (n > 0) return false;
    else return true;
    
};
