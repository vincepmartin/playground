# URLify: Write a method to replace all spaces in a string with %20.
# You may assume that the string has sufficient space at the end to hold the additional chars.
# Perform in place!!!
#
# Example:
# urlify("Mr John Smith") -> "Mr%20John%20Smith"

from typing import List

class Solution:
    # I'm not sure how I could do this inplace in python as strings are immutable here...
    def urlify(self, string) -> str:
        output = "" 
        for c in string:
            if c == ' ':
                output += "%20"
            else:
                output += c

        return output

    # the book suggests that you use an array of chars for this when using java.  Perhaps I should do the same here.
    # This may be O(n^2) ???
    def urlify2(self, string: List[chr]):
        for i in range(0, len(string) - 2):
            if string[i] == ' ':
                self.shiftToRight(string, i)
                self.insertURLSpace(string, i)

    # shift the items in the array by 2.
    def shiftToRight(self, string, index):
        for i in range(len(string) -1, index, -1):
            string[i] = string[i - 2]    

    # shift
    def insertURLSpace(self, string, index):
        string[index] = '%'
        string[index + 1] = '2'
        string[index + 2] = '0'

s = Solution()
t1 = "Mr John Smith      "
t1List = []

for c in t1:
    t1List.append(c)

print("before ", t1List)
s.urlify2(t1List)
print("after", t1List)
print("after string", ''.join(t1List).rstrip())
