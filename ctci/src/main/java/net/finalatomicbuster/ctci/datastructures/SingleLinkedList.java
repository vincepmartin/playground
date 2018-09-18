package net.finalatomicbuster.ctci.datastructures;

public class SingleLinkedList<T> {
    private ListNode head;
    private ListNode last;

    // Put a new to the end of our LinkedList
    public void push(T val) {

        // Is this our first node?
        if(head == null) {
            System.out.println("new");
            head = new ListNode(val);
            last = head;
        } else {
            System.out.println("not new");
            last.next = new ListNode(val);
            last = last.next;
        }
    }

    public int delete(T val) {
        // Find the node.
        ListNode p = head;
        int nodesDeleted = 0;

        while(p.next != null) {
            if(p.next.equals(val)) {
                p.next = p.next.next;
                nodesDeleted++;
            }

            p = p.next;
        }
        return nodesDeleted;
    }

    // TODO: Implement Find an item.
    public T find(T item) {
        return item;
    }

    @Override
    public String toString() {
        StringBuilder listString = new StringBuilder();
        ListNode p = head;

        while (p != null) {
            listString.append(p.val);

            if (p.next != null) {
                listString.append(" -> ");
            }

            p = p.next;
        }

        return listString.toString();
    }


    private class ListNode<T> {
        public T val;
        public ListNode next = null;

        public ListNode(T val) {
            this.val = val;
        }

        public ListNode() {}

        @Override
        public boolean equals(Object obj) {
            if(val.equals(obj))
                return true;
            else
                return false;
        }
    }
}
