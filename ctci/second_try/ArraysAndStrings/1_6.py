''' 
String compression:
Implement a method to perform basic string compresion using te counts of repeated chars.

For example:
aabcccccaaa becomes a2b1c5a3

If the compressed version of the string is in reality longer than the non compressed version just return
the non compressed version!
''' 

class Solution:
    def compressString(self, s: str) -> str:
        p1 = 0
        p2 = 0
        count = 0
        out = ""

        if len(s) == 1:
            return s

        while p1 != len(s) and p2 != len(s):
            if s[p1] == s[p2]:
                p2 += 1
                count += 1

            else:
                out = out + s[p1] + str(count)
                p1 = p2
                count = 0

        # one final append 
        out = out + s[p1] + str(count)

        if len(out) >= len(s):
            return s
        
        return out

s = Solution()
t1 = "aabcccccaaa"
t2 = "ab"
print(s.compressString(t1))
print(s.compressString(t2))
