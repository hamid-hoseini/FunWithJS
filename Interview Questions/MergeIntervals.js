// Coding Interview Questions

/*
Reference: https://www.geeksforgeeks.org/merging-intervals/
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

// Solution: 

/*
Brute Force Approach:

A simple approach is to start from the first interval and compare it with all other intervals for overlapping, 
if it overlaps with any other interval, then remove the other interval from the list and merge the other into 
the first interval. Repeat the same steps for the remaining intervals after the first. This approach cannot be 
implemented in better than O(n^2) time.
*/

// A JavaScript program for merging overlapping intervals

// An interval has a start time and end time
class Interval {
	constructor(start, end) {
		this.start = start;
		this.end = end;
	}
}

// Compares two intervals according to their starting time.
function compareInterval(i1, i2) {
	return (i1.start < i2.start);
}

// The main function that takes a set of intervals, merges
// overlapping intervals and prints the result
function mergeIntervals(arr) {
	// Test if the given set has at least one interval
	if (arr.length <= 0)
		return;

	// Create an empty stack of intervals
	let s = [];

	// sort the intervals in increasing order of start time
	arr.sort(compareInterval);

	// push the first interval to stack
	s.push(arr[0]);

	// Start from the next interval and merge if necessary
	for (let i = 1; i < arr.length; i++) {
		// get interval from stack top
		let top = s[s.length-1];

		// if current interval is not overlapping with stack
		// top, push it to the stack
		if (top.end < arr[i].start)
			s.push(arr[i]);

		// Otherwise update the ending time of top if ending
		// of current interval is more
		else if (top.end < arr[i].end) {
			top.end = arr[i].end;
			s.pop();
			s.push(top);
		}
	}

	// Print contents of stack
	console.log("The Merged Intervals are: ");
	while (s.length > 0) {
		let t = s.pop();
		console.log("[" + t.start + "," + t.end + "] ");
	}
	return;
}

// Driver program
let arr = [new Interval(6,8), new Interval(1,9), new Interval(2,4), new Interval(4,7)];
mergeIntervals(arr);

// Time complexity: O(N*log(N))
// Auxiliary Space: O(N)

// Solution 2

/*
Merge Overlapping Intervals using Sorting (Optimized Approach):
To solve this problem optimally we have to first sort the intervals according to the starting time. 
Once we have the sorted intervals, we can combine all intervals in a linear traversal. The idea is, 
in sorted array of intervals, if interval[i] doesn’t overlap with interval[i-1], then interval[i+1] 
cannot overlap with interval[i-1] because starting time of interval[i+1] must be greater than or equal to interval[i].
*/

/*
Follow the steps mentioned below to implement the approach:

Sort all intervals in increasing order of start time.
Traverse sorted intervals starting from the first interval, 
Do the following for every interval.
If the current interval is not the first interval and it overlaps with the previous interval,
 then merge it with the previous interval. Keep doing it while the interval overlaps with the previous one.         
 Otherwise, Add the current interval to the output list of intervals.
*/

// A JavaScript program for merging overlapping intervals

// An interval has start time and end time
class Interval {
	constructor(s, e) {
		this.s = s;
		this.e = e;
	}
}

// Function used in sort
function mycomp(a, b) {
	return a.s < b.s;
}

// The main function that takes a set of intervals, merges
// overlapping intervals and prints the result
function mergeIntervals(arr) {
	// Sort Intervals in increasing order of
	// start time
	arr.sort(mycomp);

	let index = 0; // Stores index of last element
	// in output array (modified arr[])

	// Traverse all input Intervals
	for (let i = 1; i < arr.length; i++) {
		// If this is not first Interval and overlaps
		// with the previous one
		if (arr[index].e >= arr[i].s) {
			// Merge previous and current Intervals
			arr[index].e = Math.max(arr[index].e, arr[i].e);
		}
		else {
			index++;
			arr[index] = arr[i];
		}
	}

	// Now arr[0..index-1] stores the merged Intervals
	console.log("\n The Merged Intervals are: ");
	for (let i = 0; i <= index; i++)
		console.log("[" + arr[i].s + ", " + arr[i].e + "] ");
}

// Driver program
let arr = [new Interval(6,8), new Interval(1,9), new Interval(2,4), new Interval(4,7)];
mergeIntervals(arr);


// Time Complexity: O(N*log(N))
// Auxiliary Space Complexity: O(1)
