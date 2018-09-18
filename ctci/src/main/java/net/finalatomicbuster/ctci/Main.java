package net.finalatomicbuster.ctci;

import net.finalatomicbuster.ctci.datastructures.TreeNode;

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

            case "zigzag":
                ZigZag z = new ZigZag();

                TreeNode test = new TreeNode(1);
                test.left = new TreeNode(2);
                test.left.left = new TreeNode(4);
                test.left.right = new TreeNode(5);
                test.right = new TreeNode(3);
                test.right.right = new TreeNode(6);

                z.zigzagLevelOrder(test);
                break;

            case "ctci1_1":
                CTCI1_1 ctci = new CTCI1_1();
                ctci.run();
                break;

            case "urlify":
                Urlify u = new Urlify();
                u.run();
                break;

            case "palindrome":
                Palindrome p = new Palindrome();
                p.run();
                break;

            case "morethanone":
                MoreThanOneChange m = new MoreThanOneChange();
                m.run();
                break;

            case "compress":
                CompressString c = new CompressString();
                c.run();
                break;

            case "rotate":
                ImageRotate90 r = new ImageRotate90();
                r.run();
                break;

            case "list":
                ListNodePlay l = new ListNodePlay();
                l.run();
                break;

            case "bomberman":
                BomberMan bomberMan = new BomberMan();
                bomberMan.run();
                break;

            default:
                System.out.println("supply a # or use \"list\" to get a list of all possible values.");
        }
    }
}
