package net.finalatomicbuster.ctci;

import net.finalatomicbuster.ctci.datastructures.ListNode;

import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println("Java based leetcode problems!");
        ArrayList<String> availableProblems = new ArrayList<>();

        availableProblems.add("ctci_12: CTCI big-o 12");

        if(args.length < 1) {
            System.out.println("Supply a # or use \"list\" to get a list of all possible values.");
            return;
        }

        switch(args[0]) {
            case "ctci_12":
                CTCI12 ctci12 = new CTCI12();
                ctci12.run();
                break;

            case "ListNodePlay":
                ListNodePlay lp = new ListNodePlay();
                lp.run();
                break;

            case "list":
                System.out.println("Available options: ");
                availableProblems.forEach( o -> {
                    System.out.println(o);
                });

            default:
                System.out.println("supply a # or use \"list\" to get a list of all possible values.");
        }
    }
}
