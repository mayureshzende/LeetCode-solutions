var sortedSquares = function (nums) {
  nums = nums.map((ele) => ele * ele);
  console.log(nums);
  return quickSort(nums, 0, nums.length - 1);
};

function BubleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = arr[min];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  let ls = mergeSort(left);
  let rs = mergeSort(right);

  return merge(ls, rs);
}
function merge(larr, rarr) {
  const arr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < larr.length && rightIndex < rarr.length) {
    if (larr[leftIndex] < rarr[rightIndex]) {
      arr.push(larr[leftIndex++]);
    } else {
      arr.push(rarr[rightIndex++]);
    }
  }

  return arr.concat(larr.slice(leftIndex), rarr.slice(rightIndex));
}

function quickSort(arr, left, right) {
  //   if (arr.length <= 1) return arr;
  let pi;
  if (left < right) {
    pi = partition(arr, left, right);

    quickSort(arr, left, pi - 1);
    quickSort(arr, pi + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let currIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, currIndex);
      currIndex++;
    }
  }
  swap(arr, right, currIndex);
  return currIndex;
}

function swap(arr, fi, si) {
  let temp = arr[fi];
  arr[fi] = arr[si];
  arr[si] = temp;
  return arr;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]), [0, 1, 9, 16, 100]);
