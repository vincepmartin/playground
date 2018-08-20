package net.finalatomicbuster.ctci;

public class BomberMan {

    public void run() {
        int [][] test = new int [][]{
                {1,1,1},
                {1,0,1},
                {1,1,1}};

        int [][] test2 = new int [][]{
                {1,1,1,1,1},
                {1,0,1,1,1},
                {1,1,1,1,1},
                {1,1,1,0,1},
                {1,1,1,1,1}};

        System.out.println("Testing: ");
        printArray(test2);
        System.out.println("*** OUTPUT ***");
        printArray(findBombs(test2));

    }

    public int[][] findBombs(int[][] mineField) {
        // The completed field is initially a copy of the mineField provided.
        int[][] completedField = cloneArray(mineField);
        int maxRows = mineField[0].length;
        int maxCols = mineField.length;

        // System.out.println("Testing a " + maxRows + " by " + maxCols + " field.");

        for(int row = 0; row < maxRows; row ++) {
            for(int col = 0; col < maxCols; col ++) {
                // System.out.println("Testing " + row + " x " + col + " with val: " + mineField[row][col]);
                if(mineField[row][col] == 0) {
                    // System.out.println("Bomb found at row " + row + " x " + col );
                    explodeBomb(row, col, completedField);
                }
            }
        }

        return completedField;
    }

    // TODO: Write the code that will actually explode the bomb that was found.
    public void explodeBomb(int row, int col, int[][] array) {
        int maxRows = array[0].length;
        int maxCols = array.length;

        // Zero out the row.
        for(int i = 0; i < maxCols; i ++) {
            // System.out.println("Zeroing " + row + " x " + i);
            array[row][i] = 0;
        }

        // Zero out the column.
        for(int i = 0; i < maxRows; i ++) {
            // System.out.println("Zeroing col " + i + " x " + col);
            array[i][col] = 0;
        }
    }

    public int[][] cloneArray(int[][] array) {
       int maxX = array[0].length;
       int maxY = array.length;
       int [][] newArray = new int[maxX][maxY];

       for(int x = 0; x < maxX; x++) {
           for(int y = 0; y < maxY; y++) {
               newArray[x][y]  = array[x][y];
           }
       }

       return newArray;
    }

    public void printArray(int[][] array) {
       int maxX = array[0].length;
       int maxY = array.length;

       for(int x = 0; x < maxX; x++) {
           for(int y = 0; y < maxY; y++) {
               System.out.print(array[x][y]);
           }
           System.out.println();
       }
    }

}
