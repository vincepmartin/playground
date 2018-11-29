#linked list...

# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """

        # Check for bad inputs...
        if headA is False or if headB is False:
            return False
        c = False
        pa = headA
        pb = headB

        while True:
            print "A: ", pa.val, " B: ", pb.val
            if pa.val != pb.val:
                # increment pa
                if pa.next != None:
                    pa = pa.next
                else:
                    pa = headB

                # increment pb
                if pb.next != None:
                    pb = pb.next
                else:
                    pb = headA
            else:

        return c

s = Solution()
a1 = ListNode(1)
a1.next = ListNode(2)
a1.next.next = ListNode(3)
a1.next.next.next = ListNode(4)

b1 = ListNode(9)
b1.next = ListNode(8)
b1.next.next = ListNode(7)
b1.next.next.next = ListNode(99)
b1.next.next.next.next = ListNode(2)
b1.next.next.next.next.next = ListNode(3)
b1.next.next.next.next.next.next = ListNode(4)

print s.getIntersectionNode(a1, b1)


