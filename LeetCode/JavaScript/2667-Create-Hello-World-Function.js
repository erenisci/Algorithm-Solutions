// 2667. Create Hello World Function
// https://leetcode.com/problems/create-hello-world-function/

/**
 * @return {Function}
 */

var createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};
