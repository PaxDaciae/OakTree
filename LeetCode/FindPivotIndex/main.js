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

var pivotIndex = function(nums) {

    //This function sums up an array //
    function addUp(array) {
        return sum = array.reduce((inVal, currVal) => inVal + currVal, 0);
    }
    var totalSum = addUp(nums);
    const resultObject = {};

    // This function produces an object containing the index as a key and sum to the right & left as values//
    function compileSums(array) {
        for (i = 0; i<array.length; i++) {
            const leftSum = addUp(nums.slice(0, i));
            const rightSide = nums.slice(i+1, nums.length);
            const rightSum = addUp(rightSide);

            resultObject[i] = [leftSum, rightSum]
            
            // console.log("Pt I", i, "leftSum:", leftSum, nums.slice(0, i), "rightSum:", rightSum, rightSide);
            
        }
        console.log(resultObject)
        return resultObject
    }

    // This function compares the two values for each key, returns the key if the two are equal or -1 if no equality is found//
    function compareSums(object){
        var output = "-1";
        for (elem in object) {
            var left = parseInt(object[elem][0]);
            var right = parseInt(object[elem][1]);
            if (left === right) {
                 return output = elem;
            }
        }
        return parseInt(output);
    } 
    return compareSums(compileSums(nums))   

}  


// var pivotIndex = function (nums) {
//     /* This obj will store num[i] as a key with the value of a 2-element arrays
//      showing the sum to the [left, right] */
//     const sumCompare = {};

//     /* This function adds up the numbers in one half of the array */
//     function addMargin(nums) {
//         return sum = nums.reduce((prevVal, currVal) => prevVal+currVal, 0);
        
//     }

//     function obtainIndexes (nums) {
//         const counter = nums.length;
//         var leftMargin =    [];
//         var rightMargin =   [];
//         var values = [];
//         var sumCompare = []

//         // console.log("nums este:", nums, "counterul este", counter)
//         for (i = 1; i < counter; i++) {
//             // console.log("I este", i)
//             leftMargin = nums.slice(0, i-1);
//             if (leftMargin === undefined) {
//                 leftMargin = 0;
//             }
//             rightMargin = nums.slice(i, counter);
//             if (rightMargin === undefined) {
//                 rightMargin = 0;
//             }
//             values = [addMargin(leftMargin), addMargin(rightMargin)]
//             console.log("I este", i, "stanga", leftMargin, "dreapta", rightMargin, "sumele", values)

//             // console.log("i", i, "stanga:", leftMargin, "dreapta", rightMargin)
//             sumCompare[i-1] = [leftMargin, addMargin(leftMargin), rightMargin, addMargin(rightMargin)];
//         }
//         return sumCompare
//     }
//             /* 1, 2, 3, [4], 5, 6, 7
//             -3  -2  -1   i +1  +2  +3*/

    
//    function findPivotIndex (object) {
//     // console.log('findPIndex')
//     //    console.log(Object.keys[object])
//        var pivotIndex = -1;
//        for (element in object) {
//            if (object[element][1] === object[element][3]) {
//                console.log("i object este", i, "elementul este", element)
//                return pivotIndex = i;
//             }
//         };
//         // console.log(pivotIndex)
//         return pivotIndex;
//     }
//     return parseInt(findPivotIndex(obtainIndexes(nums)));
// }
