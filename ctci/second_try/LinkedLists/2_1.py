'''
Remove duplicates:
Write code to remove duplicates from an unsorted linked list.
- Used O(N) time but O(N) in space.

Followup:
How would you solve this problem is a temp buffer is not allowed?
- Used O(N^2) slower, but uses less space.
'''

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None
    
    def toString(self):
        p1 = self
        out = ""

        while p1 != None:
            out += str(p1.val) + " -> "
            p1 = p1.next

        return out

class Solution:
    def removeDupes(self, ll):
        items = {}

        p1 = ll
        p2 = p1.next

        items[p1] = p1.val

        while p2 != None:
            if p2.val in items:
                self.delNext(p1)
                p2 = p1.next

            else:
                items[p2.val] = None
                p1 = p2
                p2 = p2.next 

    # Only uses 3 pointers.  No extra datastructure.  Is O(N) * O(N) = O(N^2)
    def removeDupesNoBuffer(self, ll):
        p0 = ll
        p1 = p0
        p2 = p1.next

        while p0 != None:
            while p2 != None:
                if p0.val == p2.val:
                    self.delNext(p1)
                    p2 = p1.next

                p1 = p2
                p2 = p2.next

            p0 = p0.next

            if p0 != None:
                p1 = p0
                p2 = p1.next

    def delNext(self, node):
        node.next = node.next.next

    

# Test
t1 = ListNode(1)
t1.next = ListNode(2)
t1.next.next = ListNode(2)
t1.next.next.next = ListNode(3)
t1.next.next.next.next = ListNode(3)
t1.next.next.next.next.next = ListNode(4)

t2 = ListNode(1)
t2.next = ListNode(2)
t2.next.next = ListNode(2)
t2.next.next.next = ListNode(3)
t2.next.next.next.next = ListNode(3)
t2.next.next.next.next.next = ListNode(4)

s = Solution()
s.removeDupes(t1)
print(t1.toString())

s.removeDupesNoBuffer(t2)
print(t2.toString())
