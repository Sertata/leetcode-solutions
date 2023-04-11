/* 
14. Longest Common Prefix

Easy
13.4K
3.9K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let prefix = strs[0];

  if (strs.length === 1) {
    return prefix;
  }

  for (let i = 1; i <= strs.length; i++) {
    if (prefix.length === 0) {
      break;
    }

    for (let j = 0; j <= strs[i]?.length; j++) {
      if (strs[i][j] !== prefix[j]) {
        prefix = strs[i].slice(0, j);
        break;
      }
    }
  }

  return prefix;
};
