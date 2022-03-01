// Create an Array -
const fruits = ["Apple", { berryList: ["BlueBerry", "Strawberry"] }];
console.log(fruits);

// Shallow Copy
const fruits3 = [...fruits];
console.log("fruits - " + JSON.stringify(fruits));
console.log("fruits Copy - " + JSON.stringify(fruits3));

// After changing element of the fruits3
fruits[1].berryList = ["Strawberry", "RaspBerry"];
console.log("--- After changing element of the fruits3 ---");
console.log("fruits - " + JSON.stringify(fruits));
console.log("fruits Copy - " + JSON.stringify(fruits3));

// Given a binary array nums, return the maximum number of consecutive 1's in the array.
function maxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = Math.max();
    for (i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }
    return Math.max(maxCount, count);
}

const nums = [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1];
console.log('Max Consecutive Ones' + maxConsecutiveOnes(nums));

// Given an array nums of integers, return how many of them contain an even number of digits.
var findNumbers = function (nums) {
    let count = 0;
    for (i = 0; i < nums.length; i++) {
        if (nums[i].toString().length % 2 === 0) {
            count++;
        }
    }
    return count;
}

const nums1 = [12, 345, 2, 6, 7896, 789621];
console.log('Find Numbers' + findNumbers(nums1));


// Given an integer array nums sorted in non-decreasing order, 
// return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function(nums) {
    let numsSquare = [];
    for (i = 0; i < nums.length; i++) {
        numsSquare.push(nums[i] * nums [i]);
    }
    console.log(numsSquare);
    return numsSquare.sort(function(a, b) {
        return a - b;
    });
}

const nums2 = [-4,-1,0,3,10];
console.log('Square: ' + sortedSquares(nums2));