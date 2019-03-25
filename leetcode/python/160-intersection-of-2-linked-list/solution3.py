# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution(object):
    def incrementOrLoop(self, pointer, currentList, headA, headB):
        if pointer.next == None:
            if currentList == 'a':
                pointer = headB
                currentList = 'b'
            else:
                pointer = headA
                currentList = 'a'
        else:
            pointer = pointer.next

        return pointer, currentList
        # print("pointer val: ", pointer.val) 

    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        
        # Check for idiotic inputs...
        if headA == None or headB == None:
            return None

        p1 = headA
        p2 = headB

        p1CurrentList = 'a'
        p2CurrentList = 'b'

        while p1.val != p2.val and p1CurrentList != p2CurrentList:
            # print("Comparing ", p1.val, " and ", p2.val)

            # Catch if we have no match...
            if p1.next == None and p2.next == None:
                return None

            p1, p1CurrentList = self.incrementOrLoop(p1, p1CurrentList, headA, headB)
            p2, p2CurrentList = self.incrementOrLoop(p2, p2CurrentList, headA, headB)

        return p1

s = Solution()

# 4 1 8 4 5 vs 5 0 1 8 4 5
testa1 = ListNode(4)
testa1.next = ListNode(1)
testa1.next.next = ListNode(8)
testa1.next.next.next = ListNode(4)
testa1.next.next.next.next = ListNode(5)
testb1 = ListNode(5)
testb1.next = ListNode(0)
testb1.next.next = ListNode(1)
testb1.next.next.next = ListNode(8)
testb1.next.next.next.next = ListNode(4)
testb1.next.next.next.next.next = ListNode(5)
sol = s.getIntersectionNode(testb1, testa1)
if sol != None:
    print(sol.val)
else:
    print sol

testa2 = ListNode(2)
testa2.next = ListNode(6)
testa2.next.next = ListNode(4)
testb2 = ListNode(1)
testb2.next = ListNode(5)
sol = s.getIntersectionNode(testa2, testb2)
if sol != None:
    print(sol.val)
else:
    print sol
