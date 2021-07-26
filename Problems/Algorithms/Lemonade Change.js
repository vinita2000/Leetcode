var lemonadeChange = function(bills) {
    
    let dct = {'5':0, '10':0};
    
    for (let i=0; i<bills.length; i++){
        if (bills[i] === 5){
            dct[5] += 1;
        }
        if (bills[i] === 10){
            dct[10] += 1;
            if (dct[5] >= 1) dct[5] -= 1;
            else return false;
        }
        if (bills[i] === 20){
            if (dct[10] >= 1){
                if (dct[5] >= 1) {
                    dct[5] -= 1;
                    dct[10] -= 1;
                }
                else return false;
            }
            else{
                if (dct[5] >= 3) dct[5] -= 3;
                else return false;
            }
        }
    }
    
    return true;
    
};
