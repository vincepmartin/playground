"""Make a Queue class using a list!
Hint: You can use any Python list method
you'd like! Try to write each one in as 
few lines as possible.
Make sure you pass the test cases too!"""

class Queue:
    def __init__(self, head=None):
        self.ll = LinkedList(Element(head))
        if head == None:  
            self.itemCount = 0
        else:
            self.itemCount = 1

    def enqueue(self, new_value):
        self.ll.insert(Element(new_value), 1)        
        self.itemCount = self.itemCount + 1

    def peek(self):
        return self.ll.get_position(self.itemCount).value

    def dequeue(self):
        return_value = self.ll.get_position(self.itemCount).value
        self.ll.delete_position(self.itemCount)
        self.itemCount -= 1

        return return_value

"""
Implementation of the Element and LinkedList Implementation
"""
class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList(object):
    def __init__(self, head=None):
        self.head = head

    # O(N), I could improve this by probably keeping track of the tail.
    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element
    
    # returns an Element at position n
    def get_position(self, position):
        current = self.head
        currentPosition = 1

        while current:
            if currentPosition == position:
                return current
            else:
                current = current.next
                currentPosition += 1

        return None

    # inserts a new Element in a particular position.
    def insert(self, new_element, position):
        """Insert a new node at the given position.
        Assume the first position is "1".
        Inserting at position 3 means between
        the 2nd and 3rd elements."""
        current = self.head

        # Sometime's we want to replace the the head...
        if position == 1:
            new_element.next = current
            self.head = new_element
            return

        for i in range(1,position):
            if i == position - 1:
                new_element.next = current.next
                current.next = new_element
                return

            else:
                current = current.next       

    # Searches for a value and then deletes it from the linked list.
    def delete(self, value):
        """Delete the first node with a given value."""
        current = self.head

        # Sometimes we want to delete the first value...
        if current.value == value:
            self.head = self.head.next
            return

        # We are not deleting the first node, let's keep going and check them all...
        while(current.next):
            if current.next.value == value:
                current.next = current.next.next
                return 
            else:
                current = current.next 

    # Deletes a node at a particular position.
    def delete_position(self, position):
        current = self.head
        current_position = position 

        if position == 1:
            self.head = self.head.next
            return
        
        while(current.next):
            if current_position + 1 == position:
                current = current.next.next
                return
            
            current = current.next
            current_position += 1
        
# Setup
q = Queue(1)
q.enqueue(2)
q.enqueue(3)

# Test peek
# Should be 1
print q.peek()

# Test dequeue
# Should be 1
print q.dequeue()

# Test enqueue
q.enqueue(4)
# Should be 2
print q.dequeue()
# Should be 3
print q.dequeue()
# Should be 4
print q.dequeue()
q.enqueue(5)
# Should be 5
print q.peek()