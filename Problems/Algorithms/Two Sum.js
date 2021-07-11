var twoSum = function(nums, target) {
  
   for (item1 of nums){
       let temp = nums.slice();
       
       let item2 = target - item1;
       let index1 = nums.indexOf(item1);
       temp[index1] = '0';
       let index2 = temp.indexOf(item2);
       
       if (index2!==-1 && index1!==index2) {
           console.log([index1, index2]);
           return ([index1, index2]);
       }
   }
    
};
