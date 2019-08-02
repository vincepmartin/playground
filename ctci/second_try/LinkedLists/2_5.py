'''
Sum Lists:
You have two numbers represented by a linked list in reverse.
Add them.

Ex:
( 7 -> 1 -> 6) + (5 -> 9 -> 2) = (2 -> 1 -> 9) = 617 + 295 = 912
'''

import sys
sys.path.append('../')
from linkedlist import LinkedList

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
    def addLists(self, a, b):
        return self.numToList(self.listToNum(a) + self.listToNum(b))

    def listToNum(self, l):
        out = 0
        c = 1

        while l.current() != None:
            out += c * l.current().val
            c *= 10
            l.next()

        return out

    def numToList(self, n):
        l = LinkedList(None) 
        while n != 0:
            l.append(n%10)
            n = int(n/10) 

        return l

# Test
t1 = LinkedList(3)
t1.append(5)
t1.append(8)
t1.append(5)
t1.append(10)
t1.append(2)
t1.append(1)
part = 8

s = Solution()
'''
print(t1.toString())
s.partitionList(t1, part)
print("Partition of", part)
print(t1.toString())
'''

t2 = LinkedList(1)
t2.append(2)
t2.append(3)

print(s.listToNum(t2))
print(s.numToList(321).toString())