/*
Split an array into two equal Sum subarrays
Last Updated: 09-05-2020
Given an array of integers greater than zero, 
find if it is possible to split it in two subarrays 
(without reordering the elements), 
such that the sum of the two subarrays is the same. 
Print the two subarrays.

Examples :

Input : Arr[] = { 1 , 2 , 3 , 4 , 5 , 5  }
Output :  { 1 2 3 4 } 
          { 5 , 5 }

Input : Arr[] = { 4, 1, 2, 3 }
Output : {4 1}
         {2 3}

Input : Arr[] = { 4, 3, 2, 1}
Output : Not Possible
 */

var arr = "1,2,2,3,4,5,1,1,5".split(',').map(Number);

function equalSumIndex(arr) {
    var leftSide = 0;

    for (let i = 0; i < arr.length; i++) {
        leftSide += arr[i];

        var rightSide = 0;
        for (let j = i + 1; j < arr.length; j++) {
            rightSide += arr[j];
        }

        if (leftSide == rightSide) {
            return i+1;
        }
    }
    return -1;
}

function splitArrayOnIndex(index) {

    var arr1 = arr.slice(0, splitIndex);
    var arr2 = arr.slice(splitIndex);
    
    return [arr1, arr2] //array with two new sides
}

var splitIndex = equalSumIndex(arr);

if(splitIndex != -1) {
    console.log('input: ' + arr);
    console.log('arr1: ' + splitArrayOnIndex(splitIndex)[0]);
    console.log('arr2: ' + splitArrayOnIndex(splitIndex)[1]); 
} else {
    console.log('Can`t split that array');
}





