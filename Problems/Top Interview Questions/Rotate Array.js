var rotate = function(nums, k) {
    let n = nums.length;
    k = k%n;
    nums.reverse();
    let i = 0; let j = k-1;
    while (i<j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i+= 1;
        j -= 1;
    }
    i = k; j = n-1;
     while (i<j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i+= 1;
        j -= 1;
    }
    return nums;
    
};
