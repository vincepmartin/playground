# Given two strings, write a method to decide if one is a permutation of the other.

class Solution:

    # If the two strings are a permutation that means they have the identical count of characters.
    # The runtime for this is O(lenA) + O(lenB) and space complexity is O(lenA + lenB)
    def isPermutation(self, a, b) -> bool:
        charMapA = {}
        charMapB = {}

        # Generate the dict/hashmaps for each string.
        for char in a:
            if char in charMapA:
                charMapA[char] += 1
            else:
                charMapA[char] = 1

        for char in b:
            if char in charMapB:
                charMapB[char] += 1
            else:
                charMapB[char] = 1
        
        # Compare the two hash maps.
        if charMapA == charMapB:
            return True
        
        return False
       
s = Solution()
print("abc vs cba should be true -> ", s.isPermutation("abc", "cba"))
print("abc vs xyz should be false -> ", s.isPermutation("abc", "xyz"))