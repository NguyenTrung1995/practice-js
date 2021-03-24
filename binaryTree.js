const arr = [2, 3, 1, 5, 3, 2, 7, 9, 8];

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const heapify = (arr, n, i) => {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If largest is not root
    if (largest !== i) {
        swap(arr, i, largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// main function to do heap sort
const heapSort = (arr, n) => {
    // Build heap (rearrange array)
    for (let i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    // console.log(arr);
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        swap(arr, 0, i);
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

heapSort(arr, arr.length);

// console.log(arr);
