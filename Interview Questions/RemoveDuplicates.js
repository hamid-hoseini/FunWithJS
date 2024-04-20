// Coding Interview Question 

/*
Reference: https://www.geeksforgeeks.org/remove-duplicates-sorted-array/
Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.

Examples: 

Input: arr[] = {2, 2, 2, 2, 2}
Output: arr[] = {2}
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output: arr[] = {1, 2, 3, 4, 5}
*/

// Solution 1

function removeDuplicates1(arr , n) {
    if (n == 0 || n == 1)
        return n;

    // To store index of next unique element
    var j = 0;

    // Doing same as done in Method 1
    // Just maintaining another updated index i.e. j
    for (i = 0; i < n - 1; i++)
        if (arr[i] != arr[i + 1])
            arr[j++] = arr[i];

    arr[j++] = arr[n - 1];

    return j;
}

 
    var arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
    var n = arr.length;

    n = removeDuplicates1(arr, n);

    // Print updated array
    for (i = 0; i < n; i++)
        document.write(arr[i] + " ");

// Time Complexity: O(N) 
// Auxiliary Space: O(1)



// Solution 2

/*
Fastest Efficient Approach: Using Binary Search
The problem requires us to remove duplicate elements from a sorted array, i.e., 
we need to keep only one copy of each element in the array. Since the array is sorted, 
all duplicate elements will be adjacent to each other, so we can easily remove them by 
shifting the subsequent elements of the array to the left.

We can use two pointers i and j, where i points to the last unique element found so far, 
and j points to the current element being examined. If nums[i] and nums[j] are equal, 
we just increment j. Otherwise, we increment i and copy nums[j] to nums[i]. At the end, 
we return i+1, which represents the length of the modified array.

We Would be using Binary Search to solve the particular problem in the fastest way.

Implementation of the above approach:
*/

// Function to remove duplicate elements
// This function returns the new size of the modified array.
// Using Binary Search to solve the problem efficiently
function binarySearch(nums, low, high, val) {
	let res = -1;
	while (low <= high) {
		let mid = Math.floor(low + (high - low) / 2);
		// Check for lower limit
		if (nums[mid] <= val) low = mid + 1;
		// Check for higher limit
		else {
			// Move to higher limit
			res = mid;
			high = mid - 1;
		}
	}
	// Check if not found
	if (res === -1) return nums.length;

	return res;
}

function removeDuplicates2(nums) {
	let n = nums.length;
	let idx = 0; // It stores the index of unique elements.

	while (idx !== n) {
		let i = binarySearch(nums, idx + 1, n - 1, nums[idx]); // Find the upper bound of the element.

		if (i === n) return idx + 1; // Means that we are not able to find the upper bound of the element.
		idx++;
		nums[idx] = nums[i];
	}
	return idx + 1;
}

// Driver code
let arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];

// removeDuplicates() returns the new size of the array.
let n = removeDuplicates2(arr);

// Print the updated array
for (let i = 0; i < n; i++) {
	console.log(arr[i]);
}

// Time Complexity: O(N), in the worst case we will traverse the whole array when each element of array is unique.
// Auxiliary Space: O(1),No extra space is used
