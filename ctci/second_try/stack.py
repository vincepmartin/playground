class Stack:
    def __init__(self):
        self.minvals = []
        self.s = []
    
    def pop(self):
        if len(self.s) == 0:
            return None

        temp = self.s.pop()

        if len(s.minvals) > 0 and temp == self.minvals[-1]:
            self.minvals.pop()
        
        return temp
        
    def push(self, i):
        self.s.append(i)


        if len(self.minvals) == 0 or i < self.minvals[-1]:
            self.minvals.append(i)
        
    def min(self):
        if len(self.minvals) > 0:
            return self.minvals[-1]
        else:
            return None

# testing.
s = Stack()
s.push(1)
s.push(2)
s.push(3)
s.push(-1)
print("Min:", s.min())
print("Popping:", s.pop())
print("New min:", s.min())
print("Popping:", s.pop())
print("New min:", s.min())
print("Popping:", s.pop())
print("New min:", s.min())
print("Popping:", s.pop())
print("New min:", s.min())
print("Popping:", s.pop())
print("New min:", s.min())
