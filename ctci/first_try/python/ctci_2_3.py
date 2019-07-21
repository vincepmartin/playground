from linkedlist import Element

def delNode(node):
    print 'attempting to delete ', node.value, ' and make equal to ', node.next.value
    nextnode = node.next
    node.value = nextnode.value
    node.next = nextnode.next
    return

def printNodes(node):
    p = node

    while p != None:
       print p.value
       p = p.next

# Test the code.
l = Element('a')
l.next = Element('b')
l.next.next = Element('c')
l.next.next.next = Element('d')
l.next.next.next.next = Element('e')
l.next.next.next.next.next = Element('f')

tn = l.next.next

print 'Initial:'
printNodes(l)

print 'After Del:'
delNode(tn)
printNodes(l)
