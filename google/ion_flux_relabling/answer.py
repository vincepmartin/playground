def answer(h,​ ​q):
    # Define a Node object.
    class Node():
        def __init__(self, key_value):
            self.key_value = key_value
            self.left = None
            self.right = None

    # Post order traversal code.
    def postOrder(root):

        if root:
            # Explore the left child.
            postOrder(root.left)

            # Explore the right child.
            postOrder(root.right)

            # Print the root value of the node.
            postOrder(root.key_value)


    # Driver code
    root = Node(1)
    root.left      = Node(2)
    root.right     = Node(3)
    root.left.left  = Node(4)
    root.left.right  = Node(5)

    postOrder(root)

    # Determine the number of nodes via the height h.
    # number_of_nodes = (2**h)-1

    # Set initial node. 
    # bsp_nodes = new Node()

    # Loop that goes from 1 to number_of_nodes every 3 values.