class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BST(object):
    def __init__(self, root):
        self.root = Node(root)

    def insert(self, new_val):
        self.insert_helper(self.root, new_val)

    def search(self, find_val):
        return self.search_helper(self.root, find_val)

    def insert_helper(self, start, insert_val):
        if insert_val < start.value:
            if start.left == None:
                start.left = Node(insert_val)
            else:
                self.insert_helper(start.left, insert_val)

        if insert_val > start.value:
            if start.right == None:
                start.right = Node(insert_val)
            else:
                self.insert_helper(start.right, insert_val)

    def search_helper(self, start, find_val):
        if start != None:
            if start.value == find_val:
                return True

            if find_val < start.value:
                return self.search_helper(start.left, find_val)

            elif find_val > start.value:
                return self.search_helper(start.right, find_val)

        return False

# Set up tree
tree = BST(4)

# Insert elements
tree.insert(2)
tree.insert(1)
tree.insert(3)
tree.insert(5)

# Check search
# Should be True
print tree.search(4)

# Should be False
print tree.search(6)
