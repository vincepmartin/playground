'''
Palindrome Permutation:
Given a string write a function to check if it is a permuation of a palindrome.
'''

# Time Complexity: O(a + b) where a and b are len of a and b strings.
# Space Complexity: O(a + b) worst case that we have an entry for every character in our map if our string contains all diff chars.

class Solution:
    def isPalindrome(self, a, b) -> bool:
        return self.getCounts(a) == self.getCounts(b)

    def getCounts(self, string):
        charMap = {}
        for c in string:
            if c in charMap:
                charMap[c] += 1
            else:
                charMap[c] = 1

        return charMap
        
s = Solution()
# true
print(s.isPalindrome("fuck you", "kcuf ouy"))
# false
print(s.isPalindrome("fuck you", "super nachos man"))