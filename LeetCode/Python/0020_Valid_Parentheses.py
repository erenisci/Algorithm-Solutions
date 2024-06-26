# 20. Valid Parentheses
# https://leetcode.com/problems/valid-parentheses/


class Solution:
    def isValid(self, s: str) -> bool:
        dic = {"(": 1, ")": 2, "[": 3, "]": 6, "{": 5, "}": 10}
        res = []
        for one in s:
            temp = dic[one]
            if temp % 2:
                res.append(temp)
            else:
                if len(res) and res[-1] == temp // 2:
                    del res[-1]
                else:
                    return False
        return res == []
