package net.finalatomicbuster.ctci;

import net.finalatomicbuster.ctci.datastructures.TreeNode;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ZigZag {

    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> list = new ArrayList<>();
        HashMap<Integer, List<Integer>> results = new HashMap<>();
        traversePo(root, 0, results);

        System.out.println("*** Results to string: ");
        System.out.println(results.toString());

        results.forEach( (k,v) -> {
            list.add(v);
        });

        return list;
    }

    // Traverse post order.
    private void traversePo(TreeNode root, Integer depth, HashMap<Integer, List<Integer>> map) {
        // Base
        if(root == null)
            return;

        depth = depth + 1;

        // Traversal Post Order of (Left, Right, Node)
        traversePo(root.left, depth, map);
        traversePo(root.right, depth, map);

        System.out.println("root value is: " + root.val + " at depth " + (depth - 1));

        // List<Integer> cd = new ArrayList();
        List<Integer> cd;

        // I think the hash maps here are slowing things down a little bit...
        if(map.containsKey(depth - 1)) {
            cd = map.get(depth - 1);
        } else {
            cd = new ArrayList();
            map.put(depth - 1, cd);
        }

        // Odd depth
        if((depth - 1) % 2 > 0) {
            System.out.println("ODD");
            cd.add(0, root.val);
        }

        // Even depth
        else {
            System.out.println("EVEN");
            cd.add(root.val);
        }
    }
}
