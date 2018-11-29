package net.finalatomicbuster.ctci;

public class ConvexPoly {

    public void run() {
        int test[][] = {{0,0},{0,1},{1,1},{1,0}};
        int test2[][] = {{0,0},{0,10},{10,10},{10,0},{5,5}};
        System.out.println("Test: " + isConvex(test2));
    }

    public boolean isConvex(int[][] points) {
        int[] p1;
        int[] p2;
        int[] p3;

        // First point.
        for(int i = 0; i < points.length; i++) {
            p1 = points[i];

            if(i == (points.length - 2)) {
                p2 = points[i+1];
                p3 = points[0];
            } else if(i == (points.length - 1)) {
                p2 = points[0];
                p3 = points[1];
            } else {
                p2 = points[i+1];
                p3 = points[i+2];
            }

            System.out.println("i: " + i + " -> " + pp(p1) + " , " + pp(p2) + " , " + pp(p3));
            System.out.println("Angle with source point " + pp(p1) + " : " + getAngle(p1, p2, p3));

            if(getAngle(p1,p2,p3) > 180)
                return false;
        }


        return true;
    }

    private double distanceBetweenPoints(int[] point1, int[] point2) {
        int x1 = point1[0];
        int x2 = point2[0];

        int y1 = point1[1];
        int y2 = point2[1];

        double distance =  Math.sqrt( Math.pow( (x1 - x2), 2) + Math.pow( (y1 - y2), 2));
        System.out.println(distance);
        return distance;
    }

    private double getAngle(int p1[], int p2[], int p3[]) {
        // p1 is the center point...
        double opposite = distanceBetweenPoints(p1,p2);
        double adjacent = distanceBetweenPoints(p2,p3);

        return Math.toDegrees(Math.atan(opposite / adjacent));
    }

    // Get a String from a point.
    private String pp(int[] point) {
        return point[0] + ", " + point[1];
    }


}
