const bubbleSort = dataset => {
  console.log('Sorting with bubble sort')
  // ...
  // ...
  return dataset
}

const quickSort = dataset => {
  console.log('Sorting with quick sort')
  // ...
  // ...
  return dataset
}

// And it can be used as

const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Output : Sorting with quick sort
sorter2(shortDataSet) // Output : Sorting with bubble sort