# LinkedList
class LinkedList(object):
    def __init__(self, x):
        self.head = ListNode(x)
        self.tail = self.head
        self.previous = None
        self.p = self.head
        self.length = 1

    def append(self, x):
        if self.head.val == None:
            self.head.val = x 
        else:
            self.tail.next = ListNode(x)
            self.tail = self.tail.next        
            self.length += 1

    def prepend(self, x):
        if self.head.val == None:
            self.head.val = x
        else:
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
