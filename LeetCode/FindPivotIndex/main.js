/* 
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1. 

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
*/

var pivotIndex = function (nums) {

    /* This obj will store num[i] as a key with the value of a 2-element arrays
     showing the sum to the [left, right] */
    const sumCompare = {};

    /* This function adds up the numbers in one half of the array */
    function addMargin(nums) {
        return sum = nums.reduce((prevVal, currVal) => prevVal+currVal, 0);
    }

    function obtainIndexes (nums) {
        const counter = nums.length;
        // console.log("nums este:", nums, "counterul este", counter)
        for (i = 0; i< counter; i++) {
            // console.log("Pentru I",i)
            var leftMargin = nums.slice(0, i);
            var rightMargin = nums.slice(i, counter-1);
            var values = [addMargin(leftMargin), addMargin(rightMargin)]
            // console.log(leftMargin, addMargin(leftMargin), rightMargin, addMargin(rightMargin))
            sumCompare[i] = [leftMargin, addMargin(leftMargin), rightMargin, addMargin(rightMargin)];
            
        }   
        console.log(sumCompare)
        return sumCompare 
    }
    
    // console.log("result:", obtainIndexes(nums))

    
   function findPivotIndex (object) {
    //    console.log(Object.keys[object])
       var pivotIndex = -1;
       for (element in object) {
           if (object[element][1] === object[element][3]) {
               console.log("elementul este:", nums[element])
               pivotIndex = element;
            }
        };
        return pivotIndex;

        
    }
    console.log(findPivotIndex(obtainIndexes(nums)))
};