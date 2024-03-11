package com.jtechy.graphs;

import java.util.Arrays;

public class Sample {

    public static void main(String[] args){

        String input = "CORD";
        String output = "WARM";

        char[] inputArray = input.toCharArray();
        char[] outputArray = output.toCharArray();
        for(int i=0; i<inputArray.length; i++) {
            inputArray[i] = outputArray[i];
            System.out.println(inputArray);
        }

        //

        //CORD -> WORD -> WARD -> WARM

    }

}
