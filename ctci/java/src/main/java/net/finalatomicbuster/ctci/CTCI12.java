package net.finalatomicbuster.ctci;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

public class CTCI12 {
    public void run() {
        System.out.println("nachos: substring(0,0) -> " + "nachos".substring(0,1));

        permutation("abc");
    }

    public static void permutation(String str) {
        permutation(str, "");
    }

    public static void permutation(String str, String prefix) {
        if (str.length() == 0) {
            System.out.println(prefix);
        } else {
            for (int i = 0; i < str.length(); i++) {
                String rem = str.substring(0, i) + str.substring(i + 1);
                System.out.println("\t: " + str.substring(0,i));
                System.out.println("\t: " + str.substring(i + 1));

                System.out.println("Calling w/ " + rem + " and " + str.charAt(i) + " i " + i);
                permutation(rem, prefix + str.charAt(i));
            }
        }
    }

}

  

