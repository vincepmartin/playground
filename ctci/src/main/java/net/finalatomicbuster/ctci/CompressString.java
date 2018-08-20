package net.finalatomicbuster.ctci;

import java.util.ArrayList;

public class CompressString {

    public void run() {

        ArrayList<TestCase> tests = new ArrayList<>();
        tests.add(new TestCase("aabcccccaaa", "a2b1c5a3"));

        for(TestCase t: tests) {
            System.out.println(t.input + " -> " + t.expectedResult + " vs " + compress(t.input));
        }
    }


    private class TestCase{
        public String input;
        public String expectedResult;

        public TestCase(String input, String expectedResult) {
           this.input = input;
           this.expectedResult = expectedResult;
        }
    }

    private String compress(String original) {
        // Pointers.
        int b = 0;
        int e = 0;
        StringBuilder result = new StringBuilder();


        while(b < original.length() && e < original.length()) {
            System.out.println("b: " + b + " : " + original.charAt(b) + " and e: " + e + " : " + original.charAt(e));
            // Match
            if(original.charAt(b) == original.charAt(e)) {
                e++;
            }

            else {
               System.out.println(original.charAt(b));
                result.append(original.charAt(b) + new Integer(e-b).toString());
                b = e;
            }
            System.out.println("*** " + result.toString());
        }

        // Handle end.
        if(b != e) {
            result.append(original.charAt(b) + new Integer(e-b).toString());
        }

        if(result.toString().length() < original.length()) {
            return result.toString();
        }

        System.out.println("*** " + result.toString());
        return original;
    }

}
