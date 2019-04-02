class Solution(object):
    def swapValues(self, nums, j, k):
        nums[j], nums[k] = nums[k], nums[j]

    def rotate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: None Do not return anything, modify nums in-place instead.
        """

        # Bail if our value is negative or 0.        
        if k < 1:
            return

        # Handle lists with only 2 items in it.
        if len(nums) == 2:
            # Even, any number of swaps is the same result...
            if k%2 == 0:
                return

            # Odd
            else:
                self.swapValues(nums, 0, 1)
                return

        if k == 1:
            shiftFix = 0
        else:
            shiftFix = 1

        for i in range(0, len(nums) + k + 1):
            self.swapValues(nums, i%len(nums), (i+(k-shiftFix))%len(nums))

t1 = [1,2,3,4,5,6,7]
k1 = 5 

t2 = [-1,-100,3,99] 
k2 = 3

s = Solution()
s.rotate(t1, k1)
print t1

print("****")
s = Solution()
s.rotate(t2, k2)
print t2