/* 
9. Palindrome Number
Easy

Given an integer x, return true if x is a palindrome, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
*/

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  let result = false;
  const xToStr = x + "";
  const { length } = xToStr;
  for (let i = 0; i < length; i++) {
    if (xToStr[i] !== xToStr[length - 1 - i]) {
      result = false;
      break;
    }
    result = true;
  }
  return result;
};
