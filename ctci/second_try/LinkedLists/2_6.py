''' 
Palindrome: Implement a function to check if a linked list is
a palindrome or not.
'''

import sys
sys.path.append('../')
from linkedlist import ListNode 

class Solution:
    def isListPalindrome(self, l): 
        stack = self.linkedListToStack(l)
        p = l
        print("half len is: ", len(stack)//2)

        # O(N/2) in worst case scenario.
        for i in range(len(stack)//2):
            if p.val != stack.pop():
                return False

            else:
                p = p.next

        return True

    # This is O(N) no matter what.
    # This is also O(N) for storage space.
    def linkedListToStack(self, l):
        out = []
        p = l

        while p != None:
            out.append(p.val)
            p = p.next

        return out

t1 = ListNode(1)
t1.next = ListNode(2)
t1.next.next = ListNode(3)

t2 = ListNode(1)
t2.next = ListNode(2)
t2.next.next = ListNode(3)
t2.next.next.next = ListNode(2)
t2.next.next.next.next = ListNode(1)

s = Solution()
print("t1", s.isListPalindrome(t1))
print("t2", s.isListPalindrome(t2))
