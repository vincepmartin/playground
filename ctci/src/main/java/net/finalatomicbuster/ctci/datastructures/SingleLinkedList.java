package net.finalatomicbuster.ctci.datastructures;

public class SingleLinkedList<T> {
    private ListNode head;
    private ListNode last;

    // Put a new to the end of our LinkedList
    public void push(T val) {

        // Is this our first node?
        if(head == null) {
            head = new ListNode(val);
            last = head;
        } else {
            last.next = new ListNode(val);
            last = last.next;
        }
    }

    public int delete(T val) {
        return delete(val, head);
    }

    public int delete(T val, ListNode node) {
        // Find the node.
        ListNode p = node;
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


    /**
     * Remove all duplicates from the linked list. (CTCI 2.1)
     * @return
     */
    public int deleteDuplicates() {
        ListNode p1 = head;
        ListNode p2 = p1.next;
        int nodesDeleted = 0;

        while(p1.next != null) {

            while(p2.next != null) {
                if(p1.equals(p2.next.val)) {
                    p2.next = p2.next.next;
                }

                if(p2.next != null)
                    p2 = p2.next;
            }

            p1 = p1.next;
            p2 = p1.next;
        }

        return nodesDeleted;
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
