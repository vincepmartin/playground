package net.finalatomicbuster.ctci;


import net.finalatomicbuster.ctci.datastructures.SingleLinkedList;

public class ListNodePlay {

    public void run() {
        SingleLinkedList<String> a = new SingleLinkedList();
        a.push("a");
        a.push("b");
        a.push("c");
        a.push("d");
        a.push("b");
        a.push("f");

        System.out.println("Node A: ");
        System.out.println(a.toString());

        System.out.println("Deleted " + a.delete("b"));
        System.out.println("Node A: ");
        System.out.println(a.toString());
     }

}
