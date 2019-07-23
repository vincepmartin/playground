'''
Find K to last item in a Linked List.

I think that I can do this 2 ways...

1. Find how big the list is by traversing it until the end.
Then traverse again until size - k.

2. Push each linked list item onto a stack and then pop until you get K.
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
    def kFromLast(self, ll, k):
        p = ll

        for i in range(1, self.sizeOfList(ll)-k) :
            p = p.next
        
        return p.val
            
    def sizeOfList(self, ll):
        if ll == None:
            return 0

        p = ll
        count = 0

        while p != None:
            count += 1
            p = p.next

        print("Count: ", count)
        return count


# Test
t1 = ListNode(1)
t1.next = ListNode(2)
t1.next.next = ListNode(3)
t1.next.next.next = ListNode(4)
t1.next.next.next.next = ListNode(5)
t1.next.next.next.next.next = ListNode(6)

s = Solution()
print(s.kFromLast(t1, 0))