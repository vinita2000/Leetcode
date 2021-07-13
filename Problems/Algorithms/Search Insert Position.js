/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    
    const index = binarySearch(nums, target, 0, nums.length);

    return index;
    
};

const binarySearch = (nums, target, start, end) => {
  
    let mid = 0;
    if ( (start+end)%2 != 0 ) mid = (start+end+1)/2-1;
    else mid = (start+end)/2-1;
    
    if (start === end)return start;
    
    if (nums[mid] === target) return mid;
    
    if (target < nums[mid]) return binarySearch(nums, target, start, mid);
    
    if (target > nums[mid]) return binarySearch(nums, target, mid+1, end);
    
};
