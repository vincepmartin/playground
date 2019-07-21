package net.finalatomicbuster.ctci;


import net.finalatomicbuster.ctci.datastructures.SingleLinkedList;

public class ListNodePlay {

    public void run() {
        ctci1_2();
    }

     public void ctci1_1() {
        SingleLinkedList<String> a = new SingleLinkedList();
        a.push("a");
        a.push("b");
        a.push("c");
        a.push("d");
        a.push("b");
        a.push("f");
        a.push("a");

        System.out.println("Node A: ");
        System.out.println(a.toString());

        // System.out.println("Deleted " + a.delete("b"));
        System.out.println("Deleted " + a.deleteDuplicates());
        System.out.println("Node A: ");
        System.out.println(a.toString());
     }

     public void ctci1_2() {
        SingleLinkedList<String> a = new SingleLinkedList();
        a.push("a");
        a.push("b");
        a.push("c");
        a.push("d");
        a.push("e");
        a.push("f");
        a.push("g");

        System.out.println(a.toString());
        a.deleteKthNode(2);
        System.out.println(a.toString());
     }

}
