const merge = (arr, l, m, r) => {
  let n1 = m - l + 1;
  let n2 = r - m;
  console.log(arr, l, m, r);
  /* create temp arrays */
  let L = [], R = [];
  /* Copy data to temp arrays L[] and R[] */
  for (let i = 0; i < n1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[m + 1 + j];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
  }

  console.log('merge', L, R);
};

const mergeSort = (arr, l, r) => {
  console.log('mergeSort');
  if (l < r) {
    let m = Math.floor((l + r) / 2);

    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
};

const array = [3, 1, 2, 4, 5, 7, 1];

console.log(mergeSort(array, 0, array.length - 1));

console.log(array);