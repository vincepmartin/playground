class Solution:
    # we have 3 types of edits. insert a char, remove a char and replace a char.
    def oneEditAway(self, before, after) -> bool:
        # If we are the same, then we know nothing has been changed.
        if before == after:
            return False 
        # Check for addition or removal
        elif len(before) - len(after) != 0:
            return True
        # Worst case, we have to check all of the changes.
        elif self.numOfCharsDifferent(before, after) == 1:
            return True

        return False

    def numOfCharsDifferent(self, before, after) -> int:
        chars = len(before)
        numOfChanges = 0

        for i in range(0, chars):
            if before[i] != after[i]:
                numOfChanges += 1

        return numOfChanges

s = Solution()
tests = [["pale", "ple", True], ["pales", "pale", True], ["pale", "bale", True], ["pale", "bake", False]]

for test in tests:
    print("Testing ", test[0], " vs ", test[1])
    if s.oneEditAway(test[0], test[1]) == test[2]:
        print("PASS")
    else:
        print("FAIL")