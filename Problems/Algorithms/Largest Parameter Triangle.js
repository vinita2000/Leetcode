var largestPerimeter = function(nums) {
    
    let n = nums.length;
    
    if (n < 3) return 0;
    
    nums.sort((a,b)=>a-b);
    
    console.log(nums);
    
    let j = n-1;
    while (j>=2){
        let s1 = nums[j];
        let s2 = nums[j-1];
        let s3 = nums [j-2];
        if (s2+s3<=s1){
            j -= 1;
            
        } else{
            return s1+s2+s3;
        }
    }
    
    return 0;
    
};
