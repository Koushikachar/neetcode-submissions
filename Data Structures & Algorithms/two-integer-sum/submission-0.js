class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hash={}
        let needvalue;
        for(let i=0;i<nums.length;i++)
        {
            needvalue=target-nums[i];
            if(needvalue in hash)
            {
                return[i ,hash[needvalue]];

            }
            else{
                hash[nums[i]]=i;
            }
        }
  return [];
    }
  
}
