package net.finalatomicbuster.ctci;

// https://leetcode.com/problems/fizz-buzz/description/
public class FizzBuzz {

    public void run() {
        for(int i = 1; i <= 100; i++) {
            boolean multiple3 = isMultipleOf(i, 3);
            boolean multiple5 = isMultipleOf(i, 5);

            if(multiple3 && multiple5) {
                System.out.println("FizzBuzz");
            }
            else if(isMultipleOf(i, 3)) {
                System.out.println("Fizz");
            }
            else if(isMultipleOf(i, 5)) {
                System.out.println("Buzz");
            }
            else {
                System.out.println(i);
            }
        }
    }

    private boolean isMultipleOf(int testNumber, int multiple) {
        if(testNumber % multiple == 0) {
            return true;
        }

        else {
            return false;
        }
    }
}
