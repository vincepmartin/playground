package net.finalatomicbuster.ctci;

import java.util.ArrayList;

public class Urlify {

    public void run() {
        ArrayList<String> tests = new ArrayList();
        tests.add("ab_cd__");
        tests.forEach( i -> urlifyString(i, i.length()));
    }

    // Shift a string n characters to the left.
    private void shift(char[] c, int start, int shift) {
        System.out.println("*** " + start + " and " + shift);
        for(int i = 0; i < shift - 1; i ++) {
            for(int j = c.length - 1; j > start; j--) {
                int x = j-1;
                c[j] = c[j - 1];
                printArray(c);
            }
        }
    }

    // Print array.
    private void printArray(char[] c) {
       for(int i = 0; i < c.length - 1; i++) {
          System.out.print(c[i]);
       }
       System.out.println();
    }

    // Insert a new string into a current character array.
    private void insertStringIntoChar(char c[], int start, String insertion) {
        shift(c, start, insertion.length());

        for(int i = 0; i < insertion.length(); i ++) {
            c[i + start] = insertion.charAt(i);
        }
    }


    // Main function needed in this question of 1.3.
    public String urlifyString(String source, int expectedSize) {
        char[] c = new char[expectedSize];
        System.out.println("----- " + c.length);

        System.out.println("URLIfying " + source + " to a " + expectedSize + " size String.");

        c = source.toCharArray();

        for(int i = 0; i < c.length - 1; i++) {
            if(c[i] == '_') {
                System.out.println("\tMatch at " + i);
                insertStringIntoChar(c, i, "%20");
            }
        }

        System.out.println("The URLified string is " + new String(c));
        return new String(c);
    }
}
