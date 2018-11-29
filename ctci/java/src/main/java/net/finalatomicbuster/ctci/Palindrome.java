package net.finalatomicbuster.ctci;

import java.util.ArrayList;
import java.util.HashMap;

public class Palindrome {
    public void run() {
        ArrayList<String> tests = new ArrayList<>();
        tests.add("ass");
        tests.add("taco cat");
        tests.add("asdfsdfs");
        tests.add("a");


        tests.forEach( t -> {
            System.out.println(t + " isPalindrome: " + isPalindrome(t));
        });

    }

    public boolean isPalindrome(String s) {
        if(s.equals(""))
            return true;

        HashMap<Character, Integer> c = new HashMap<>();

        for(Character i: s.toLowerCase().toCharArray()) {
            if(c.containsKey(i))
                c.put(i, c.get(i) + 1);
            else
                c.put(i, 1);
        }


        int totalNonPairs = 0;
        for(Character key: c.keySet()) {
            if(key != ' ') {
                System.out.println(key + ": total + " + c.get(key) % 2);
                totalNonPairs = totalNonPairs + (c.get(key) % 2);
            }
        }

        int sizeSanSpaces = s.length() - (c.containsKey(' ') ? c.get(' ') : 0);
        System.out.println("Total is: " + totalNonPairs + " and size is: " + sizeSanSpaces);


        if(s.length() - sizeSanSpaces % 2 > 0 && totalNonPairs == 1) { // odd
            return true;
        }
        else if(s.length() - sizeSanSpaces % 2 == 0 && totalNonPairs == 0) { // even
            return true;
        }

        return false;
    }
}
