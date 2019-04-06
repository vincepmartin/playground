class Solution(object):
    def splitMax(self, nums):
        if nums == [] or nums == None:
            return 0

        print("Checking: ", nums)
        if len(nums) >= 3:
            # find max value.
            maxIndex = nums.index(max(nums)) 
            leftishIndex = 0 if maxIndex == 0 else maxIndex - 1
            rightishIndex = len(nums) if maxIndex == len(nums) else maxIndex + 2 
            return nums[maxIndex] + self.splitMax(nums[: leftishIndex]) + self.splitMax(nums[rightishIndex:])
        else:
            print("Returning MAX: ", max(nums))
            return max(nums)

    def rob(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        return self.splitMax(nums)

s = Solution()
t1 = [2,7,9,3,1]
t2 = [1,2,3,1]
t3 = [1, 1, 1]
t4 = [2,3,2]
print(s.splitMax(t4))