package net.finalatomicbuster.ctci;


import net.finalatomicbuster.ctci.datastructures.SingleLinkedList;

public class ListNodePlay {

    public void run() {
        SingleLinkedList<String> a = new SingleLinkedList();
        a.push("nachos");
        a.push("tacos");
        a.push("burritos");

        System.out.println("Node A: ");
        System.out.println(a.toString());

        System.out.println("Inserting 9 into A: ");
        a.push("poop");
        System.out.println(a.toString());
    }

}
