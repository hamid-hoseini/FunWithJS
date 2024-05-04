// Coding Interview Question

/*
Reference: https://www.geeksforgeeks.org/find-first-and-last-positions-of-an-element-in-a-sorted-array/
Last Updated : 17 Apr, 2023
Given a sorted array arr[] with possibly duplicate elements, the task is to find indexes of 
the first and last occurrences of an element x in the given array. 

Examples: 

Input : arr[] = {1, 3, 5, 5, 5, 5, 67, 123, 125}, x = 5
Output : First Occurrence = 2
         Last Occurrence = 5

Input : arr[] = {1, 3, 5, 5, 5, 5, 7, 123, 125 }, x = 7
Output : First Occurrence = 6
         Last Occurrence = 6
*/

// Solution:

/*
The idea to solve this problem is iterate on the elements of given array and check given 
elements in an array and keep track of first and last occurrence of the found element’s index.
Below are the steps to implement the above idea:

Run a for loop and for i = 0 to n-1
Take first = -1 and last = -1 
When we find an element first time then we update first = i 
We always update last=i whenever we find the element.
We print first and last.
*/

// Function for finding first and last occurrence
// of an elements
function findFirstAndLast(arr,x)
{
  let n = arr.length;
  let first = -1, last = -1;
  for (let i = 0; i < n; i++) {
    if (x != arr[i])
      continue;
    if (first == -1)
      first = i;
    last = i;
  }
  if (first != -1) {
    document.write("First Occurrence = " + first + "<br>");
    document.write("Last Occurrence = " + last + "<br>");
  }
  else
    document.write("Not Found");
}

let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
let x = 8;
findFirstAndLast(arr, x);

// Time Complexity: O(n) 
// Auxiliary Space: O(1)


// Solution 2
// using inbuilt functions

// JavaScript program for the above approach

function first(list, x){
	// return first occurrence index
	// of element x in ArrayList
	// using method indexOf()
	return list.indexOf(x);
}

function last(list, x){
	// return last occurrence index
	// of element x in ArrayList
	// using method lastIndexOf()
	return list.lastIndexOf(x);
}

let arr = [ 1, 2, 2, 2, 2, 3, 4, 7, 8, 8 ];
let clist = new Array();

// adding elements of array to ArrayList
for(let i=0;i<arr.length;i++){
	clist.push(arr[i]);
}
let x = 8;

// displaying the first occurrence
console.log("First Occurrence = " + first(clist, x) + "<br>");

// displaying the last occurrence
console.log("Last Occurrence = " + last(clist, x));

// This code is contributed by lokeshmvs21.



