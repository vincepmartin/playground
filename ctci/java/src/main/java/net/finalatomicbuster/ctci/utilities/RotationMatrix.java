package net.finalatomicbuster.ctci.utilities;

public class RotationMatrix {

    /* 90 Degree matrix transformation */
    /*
    static int[][] rotationMatrix =  {
            {0,-1},
            {1,0}};
    */

    static int[][] rotationMatrix =  {
            {0,1},
            {-1,0}};

    static public int[][] rotate(int[][] matrix) {
        int[][] result = new int[matrix.length][matrix.length];
        // int shift = matrix.length - 1;
        int shift = 0;

        for(int xO = 0; xO < matrix.length; xO++) {
            for(int yO = 0; yO < matrix.length; yO++) {
                int xNew = (xO * rotationMatrix[0][0] + yO * rotationMatrix[0][1]) + shift;
                int yNew = xO * rotationMatrix[1][0] + yO * rotationMatrix[1][1];
                System.out.println("Moving " + matrix[xO][yO] + " from " +
                        "(" + xO + ", " + yO + ") to (" + xNew + ", " + yNew + ")");
                // result[xNew][yNew] = matrix[xO][yO];
            }
        }

        return result;
    }
}
