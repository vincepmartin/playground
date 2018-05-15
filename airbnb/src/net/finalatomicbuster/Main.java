package net.finalatomicbuster;

public class Main {

    public static void main(String[] args) {
        System.out.println("Java based leetcode problems!");
        if(args.length < 1) {
            System.out.println("Submit a test value please.");
            return;
        }

        switch(args[0]) {
            case "751":
                LeetCode751 lc = new LeetCode751();
                lc.run();
                break;

            default:
                System.out.println("Nothing found.");
        }
    }
}
