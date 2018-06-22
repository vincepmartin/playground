package net.finalatomicbuster.ctci.datastructures;

public class SingleLinkedList<T> {
    private ListNode head;
    private ListNode current = head;


    // Put a new item at the start of the LinkedList
    public void push(T val) {
        if (head == null) {
            head = new ListNode<T>(val);
        } else {
            ListNode newNode = new ListNode(val);
            newNode.next = head;
            head = newNode;
        }
    }

    // TODO: Implement
    public void delete(T val) {
        
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
