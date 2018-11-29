package net.finalatomicbuster.ctci;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;

/**
 * Question 1.1 from CTCI.
 * Determine if a string contains only unique characters or not.
 * I would like to do this in two ways.
 *  1. With a hashmap
 *  2. With no additional datastructures.
 */
public class CTCI1_1 {

    public void run() {

        ArrayList<String> test = new ArrayList();
        test.add("false");
        test.add("butthead");
        test.add("falsee");

        for(String t: test) {

        }

        String testFalse = "false";
        String testTrue = "butthead";

        System.out.println(testFalse + " -> " + isUniqueUsingHM(testFalse));
        System.out.println(testTrue + " -> " + isUniqueUsingHM(testTrue));

        System.out.println("Doing sort compare....");

        System.out.println();
        System.out.println(testFalse + " -> " + isUnique(testFalse));
        System.out.println(testTrue + " -> " + isUnique(testTrue));



    }

    private boolean isUniqueUsingHM(String s) {
        HashSet<Character> characters = new HashSet<>();

        for(int i = 0; i < s.length(); i++) {
           if(characters.contains(s.charAt(i)))
               return false;

           else
               characters.add(s.charAt(i));
        }

        return true;
    }

    // TODO: Implement a version that does not use the hashset.
    private boolean isUnique(String s) {
        char[] characters = s.toCharArray();
        Arrays.sort(characters);

        for(int i = 0; i < characters.length - 1; i++) {
            if(characters[i] == characters[i+1])
               return false;
        }

        return true;
    }
}
