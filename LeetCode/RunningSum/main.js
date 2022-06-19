/* Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 Return the running sum of nums. 
 
 Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

 */

nums = [3,1,2,10,1];

var runningSum = function(nums) {
    var sum = [];
    for (var i = 1; i <= nums.length; i++) {
        const partialArray = nums.slice(0, i);
        const newSum = partialArray.reduce((prevVal, currValue) => prevVal + currValue, 0);
        sum.push(newSum);
    }
    return sum
}
