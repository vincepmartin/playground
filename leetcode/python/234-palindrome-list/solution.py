import math

# Definition for singly-linked list.
class ListNode(object):
   def __init__(self, x):
       self.val = x
       self.next = None

class Solution(object):
    def getVal(self, head, loc, max):
        p = head

        if loc > max:
            return None
        
        for i in range(0,max + 1):
            # print("i: ", str(i), " with val: ", str(p.val))
            if i == loc:
                return p.val
            p = p.next
    
    def isPalindrome(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        p1 = head
        p2 = head
        tail = 0

        # Find the end.
        while p2 != None:
            p2 = p2.next
            tail = tail + 1

        print("Items, starting at 0: ", tail)

        # find center and reset p2 pointer.
        midpoint = int(math.floor(tail/2))
        p2 = head

        for i in range(0, midpoint):
            print(p1.val)
            p1 = p1.next

        print("***")

        for j in range(tail-1, midpoint -1, -1):
            print(self.getVal(head, j, tail))
                
                

solution = Solution()

test1 = ListNode(1)
test1.next = ListNode(2)
test1.next.next = ListNode(3)
test1.next.next.next = ListNode(4)
test1.next.next.next.next = ListNode(5)
solution.isPalindrome(test1)

print("*********** SPLIT *************")

test2 = ListNode(1)
test2.next = ListNode(2)
test2.next.next = ListNode(3)
test2.next.next.next = ListNode(4)
solution.isPalindrome(test2)