# Is Unique: Implement an algorithm to determine if a string has all unique characters.
# What if you cannot use additional datastructures?

class Solution:

    # This uses a hashmap and at worst is O(n) for time complexity.
    def isUnique(self, string) -> bool:
        charMap = {}

        for char in string:
            if char in charMap:
                return False
            else:
                charMap[char] = True
        
        return True

    # What if we don't want to use the hashmap?  Can we do this without it?
    # Yes we can however, it is a bit more complex and will be a runtime of O(N) * O(N-1) = O(N^2)?
    def isUniqueNoExtra(self, string) -> bool:
        for i in range(0, len(string)):
            for j in range(i + 1, len(string)):
                if string[i] == string[j]:
                    return False

        return True

s = Solution()
print("isUnique ", s.isUnique("abc"))
print("isUnique ", s.isUniqueNoExtra("abc"))

print("isUniqueNoExtra ", s.isUnique("aba"))
print("isUniqueNoExtra ", s.isUniqueNoExtra("aba"))