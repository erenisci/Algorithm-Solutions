// 2634. Filter Elements from Array
// https://leetcode.com/problems/filter-elements-from-array/description/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) filteredArray.push(arr[i]);
  }
  return filteredArray;
};
