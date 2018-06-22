package net.finalatomicbuster.ctci;

import java.util.ArrayList;
import java.util.HashMap;

public class MoreThanOneChange {
    private boolean DEBUG = false;

    public void run() {
        ArrayList<TestCase> tests = new ArrayList<>();

        // Obviously False.
        tests.add(new TestCase("dog", "cat", false));
        tests.add(new TestCase("dog", "nachos", false));
        tests.add(new TestCase("dog", "fuckface", false));
        tests.add(new TestCase("dog", "doggg", false));
        tests.add(new TestCase("dog", "ddoogs", false));

        // Obviously True
        tests.add(new TestCase("dog","dog", true));
        tests.add(new TestCase("dog", "dogg", true));
        tests.add(new TestCase("pales", "pale", true));
        tests.add(new TestCase("pale", "ple", true));
        tests.add(new TestCase("pale", "bale", true));

        for(TestCase t: tests) {
            boolean result = oneAway(t.a, t.b);
            System.out.print("Testing: " + t.a + " , " + t.b + " ");
            System.out.println("Passed: " + (result == t.expected) );
        }

    }

    private class TestCase {
        public String a;
        public String b;
        public boolean expected;


        public TestCase(String a, String b, boolean expected) {
            this.a = a;
            this.b = b;
            this.expected = expected;
        }
    }

    private boolean oneAway(String a, String b) {
        // Equals means we have 0 changes which is less than 1 change!
        if(a.equals(b))
            return true;

        // More than 1 character larger means we have more than one change.
        if(Math.abs(a.length() - b.length()) > 1) {
            if(DEBUG) System.out.println("\tLength is greater than 1");
            return false;
        }

        HashMap<Character, AvsB> freqCompare = new HashMap<>();

        generateCount(a, b, freqCompare);

        int totalChanges = getTotalDiffs(freqCompare);

        if(DEBUG) System.out.println("\t" + a + " vs " + b + " total changes : " + totalChanges);

        if(totalChanges > 2)
            return false;


        return true;
    }

    private void generateCount(String a, String b, HashMap<Character, AvsB> freqCompare) {
        for(Character c: a.toCharArray()) {
            if(freqCompare.containsKey(c))
                freqCompare.get(c).incA();
            else
                freqCompare.put(c, new AvsB(1, 0));
        }

         for(Character c: b.toCharArray()) {
            if(freqCompare.containsKey(c))
                freqCompare.get(c).incB();
            else
                freqCompare.put(c, new AvsB(0, 1));
        }
    }

    private int getTotalDiffs(HashMap<Character, AvsB> freqCompare) {
        int total = 0;

        /*
        for(AvsB f : freqCompare.values()) {
            total += Math.abs(f.aCount - f.bCount);
        }
        */

        for(Character c : freqCompare.keySet()){
            if(DEBUG) System.out.println("\tComparing " + c + " with " + freqCompare.get(c).aCount + ", " + freqCompare.get(c).bCount);
            total = total + Math.abs(freqCompare.get(c).aCount - freqCompare.get(c).bCount);
        }

        return total;
    }

    private class AvsB {
        private int aCount = 0;
        private int bCount = 0;

        public AvsB(int a, int b) {
            aCount = a;
            bCount = b;
        }

        public void incA() {
            aCount++;
        }

        public void incB() {
           bCount++;
        }
    }

}
