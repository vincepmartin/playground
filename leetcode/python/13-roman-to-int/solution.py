class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        single = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000}
        double = {"IV":4, "IX":9, "XL":40, "XC":90, "CD":400, "CM":900} 
        count = 0

        for c in range(0, len(s)):
            # We have something that makes no sense...
            if s[c] not in single:
                return None

            # We are not at the last value in our string.
            if c != len(s) - 1:
                if s[c] + s[c+1] in double:
                    count = count + double[s[c]+s[c+1]]
                    c = c + 1
                else:
                    count = count + single[s[c]]

            else:
                count = count + single[s[c]]

        return count

s = Solution()
tests = ["III", "IV", "IX", "LVIII", "MCMXCIV"]

for t in tests:
    print("Testing: ", t, " -> ", s.romanToInt(t))
