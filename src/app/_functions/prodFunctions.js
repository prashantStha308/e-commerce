function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, low, high) {
    let pivot = arr[high].id; // Use 'id' property of pivot
    let i = low - 1; // Index of the smaller element

    for (let j = low; j < high; j++) {
        if (arr[j].id < pivot) {
            i++; // Move the smaller element index
            swap(arr, i, j); // Swap smaller element with arr[j]
        }
    }
    swap(arr, i + 1, high); // Place pivot in the correct position
    return i + 1; // Return pivot index
}

// Quick Sort function using recursion
export const sort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let pivotIndex = partition(arr, low, high); // Partition the array

        // Recursively sort elements before and after partition
        sort(arr, low, pivotIndex - 1);
        sort(arr, pivotIndex + 1, high);
    }
    return arr; // Return the sorted array
};
