var intersect = function(nums1, nums2) {
    let dct1 = {}; let dct2 = {};
    let common = [];
    for (let i=0; i<nums1.length; i++){
        if (dct1[nums1[i]]){
            dct1[nums1[i]] += 1;
        }else{
            dct1[nums1[i]] = 1;
        }
    }
    for (let i=0; i<nums2.length; i++){
        if (dct2[nums2[i]]){
            dct2[nums2[i]] += 1;
        }else{
            dct2[nums2[i]] = 1;
        }
    }
    
    
    for (key in dct1){
        if (dct2[key]){
            let smaller = dct1[key]<dct2[key]?dct1[key]:dct2[key];
            let k = 0;
            while (k<smaller){
                common.push(parseInt(key));
                k += 1;
            }
        }
    }
    console.log(common);
    return common;

};
