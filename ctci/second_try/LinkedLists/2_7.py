import sys
sys.path.append('../')
from linkedlist import ListNode 

class Solution:
    def intersectingList(self, a, b):
        pa = a
        pb = b
        count = 0

        while pa != pb:
            print("pa:", pa.val, "vs", "pb:", pb.val, "count:", count)
            count += 1

            if pa.next == None:
                pa = a
            else:
                pa = pa.next

            if pb.next == None:
                pb = b
            else:
                pb = pb.next
            
        print("Match: ", pa.val, " and ", pb.val)
        return pa

s = Solution()

'''
Compare:
a -> b -> c -> d -> e -> f
1 -> 2 -> 3 -> c -> d -> e -> f
'''

t1 = ListNode("a")
t1.next = ListNode("b")
t1.next.next = ListNode("c")
t1.next.next.next = ListNode("d")
t1.next.next.next.next = ListNode("e")
t1.next.next.next.next.next = ListNode("f")

t2 = ListNode(1)
t2.next = ListNode(2)
print("Intersects at:", s.intersectingList(t1, t2).val)




