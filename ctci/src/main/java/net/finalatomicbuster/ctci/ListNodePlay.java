package net.finalatomicbuster.ctci;


import net.finalatomicbuster.ctci.datastructures.SingleLinkedList;

public class ListNodePlay {

    public void run() {
        SingleLinkedList a = new SingleLinkedList();
        a.push(1);
        a.push(2);
        a.push(3);

        System.out.println("Node A: ");
        System.out.println(a.toString());

        System.out.println("Inserting 9 into A: ");
        a.push(9);
        System.out.println(a.toString());
    }

}
