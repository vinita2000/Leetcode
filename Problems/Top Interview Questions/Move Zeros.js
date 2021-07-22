var moveZeroes = function(nums) {
    
    let i = 0, j = 1; let n = nums.length;
    
    while (j<n){
        if (nums[i] == 0 && nums[j] != 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i += 1;
            j += 1;
        }
        if(nums[i] == 0 && nums[j] == 0){
            // move till j is non zero
            j += 1;
        }
        if(nums[i] != 0 && nums[j] != 0){
            i += 1;
            j += 1;
        }
        if (nums[i] != 0 && nums[j] == 0 ){
            i += 1;
            j += 1
        }
    }
    return nums;
};
