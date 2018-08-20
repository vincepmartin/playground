package net.finalatomicbuster.ctci;

import net.finalatomicbuster.ctci.utilities.RotationMatrix;

import java.util.Arrays;

public class ImageRotate90 {

    public void run() {
        int[][] test = {{1,2},
                        {3,4}};

        System.out.println("From:");
        System.out.println(Arrays.deepToString(test));
        System.out.println("To:");
        System.out.println(Arrays.deepToString(RotationMatrix.rotate(test)));

    }
}
