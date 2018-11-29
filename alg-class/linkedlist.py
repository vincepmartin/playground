"""The LinkedList code from before is provided below.
Add three functions to the LinkedList.
"get_position" returns the element at a certain position.
The "insert" function will add an element to a particular
spot in the list.
"delete" will delete the first element with that
particular value.
Then, use "Test Run" and "Submit" to run the test cases
at the bottom."""

class Element(object):
    def __init__(self, value):
        self.value = value
        self.next = None
        
class LinkedList(object):
    def __init__(self, head=None):
        self.head = head
        
    def append(self, new_element):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next = new_element
        else:
            self.head = new_element
            
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

    """ Implemented for stacks. """
    def insert_first(self, new_element):
        # Check for null
        if self.head == None:
            self.head = new_element 

        else:
            new_element.next = self.head
            self.head = new_element

    def delete_first(self):
        # Check for null
        if self.head == None:
            return

        else:  
            self.head = self.head.next

class Stack(object):
    def __init__(self, top = None):
        self.ll = LinkedList(top)

    def push(self, new_element):
        self.ll.insert_first(new_element)

    def pop(self):
        temp = self.ll.get_position(1)
        if temp != None: 
            self.ll.delete_first()
        
        return temp

# Test cases
# Set up some Elements
e1 = Element(1)
e2 = Element(2)
e3 = Element(3)
e4 = Element(4)

# Start setting up a Stack
stack = Stack(e1)

# Test stack functionality
stack.push(e2)
stack.push(e3)
print stack.pop().value
print stack.pop().value
print stack.pop().value
print stack.pop()
stack.push(e4)
print stack.pop().value