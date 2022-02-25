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
// const nums = [];
console.log(maxConsecutiveOnes(nums));
