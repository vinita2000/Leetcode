var arrayPairSum = function(nums) {
    
    nums.sort((a,b)=>a-b);
    let sum = 0;
    let i = 0;
    
    while (i<nums.length-1){
        sum += nums[i];
        i += 2;
    }
    
    console.log(sum);
    return sum;
    
};
