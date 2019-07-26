'''
Partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x.

if x is contained in the list then the value can appear anywhere.
'''

# LinkedList
class LinkedList(object):
    def __init__(self, x):
        self.head = ListNode(x)
        self.tail = self.head
        self.previous = None
        self.p = self.head
        self.length = 0

    def append(self, x):
        self.tail.next = ListNode(x)
        self.tail = self.tail.next        
        self.length += 1

    def prepend(self, x):
        newHead = ListNode(x)
        newHead.next = self.head
        self.head = newHead
        self.length += 1

    def current(self):
        return self.p

    def next(self):
        self.previous = self.p
        self.p = self.p.next

    def hasNext(self):
        if self.p.next != None:
            return True
        else:
             return False

    def delete(self):
        # Regular delete.
        if self.hasNext():
            self.p.val = self.p.next.val
            self.p.next = self.p.next.next
        # Special case for end.
        else:
            self.p = self.previous
            self.p.next = None

        self.length -= 1

    def toString(self):
        return self.head.toString()

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
    def partitionList(self, ll, x):
        if ll.length <= 1:
            return 

        while ll.current() != None:
            if ll.current().val < x:
                self.moveCurrentNodeToHead(ll)
            
            else:
                ll.next()
        
    def moveCurrentNodeToHead(self, ll):
        current = ll.current().val
        ll.delete()
        ll.prepend(current)

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
print(t1.toString())
s.partitionList(t1, part)
print("Partition of", part)
print(t1.toString())