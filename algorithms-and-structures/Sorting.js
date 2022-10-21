const bubbleSort = (arr) => {
  for (let wall = arr.length - 1; wall > 0; wall--) {
    for (let i = 0; i < wall; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

const selectionSort = arr => {
  for(let wall = arr.length - 1; wall > 0; wall--){
    let indexLargest = 0;
    for(let i = 1; i <= wall; i++){
      if(arr[i] > arr[indexLargest]){
        indexLargest=i
      }
    }
    [arr[wall], arr[indexLargest]] = [arr[indexLargest], arr[wall]]
  }
  return arr;
}

const insertionSort = arr => {
  for(let wall = 1; wall < arr.length; wall++){
    let curUnsorted = arr[wall];
    let i = 0;
    for(i = wall; i > 0 && arr[i-1] > curUnsorted; i--) {
      arr[i] = arr[i - 1];
    }
    arr[i] = curUnsorted;
  }
  return arr;
}

const shellSort = arr => {
  let gap = 1;
  while(gap < arr.length/3) {
    gap = gap*3 + 1;
  }
  while(gap >= 1){
    for(let i = gap; i < arr.length; i++){ // при gap = 1 фактически станет wall = 1 для вставок
      for(let j = i; j >= gap && arr[j] < arr[j - gap]; j-=gap){
        [arr[j], arr[j-gap]] = [arr[j-gap], arr[j]];
      }
    }
    gap = Math.floor(gap / 3);
  }
  return arr;
}

const merge = (leftSubArr, rightSubArr) => {
  const mergedParts = [];
  // Break out of loop if any one of the array gets empty
  while(leftSubArr.length && rightSubArr.length){
     // Pick the smaller among the smallest element of left and right sub arrays 
    if(leftSubArr[0] < rightSubArr[0]){
      mergedParts.push(leftSubArr.shift());
    } else {
      mergedParts.push(rightSubArr.shift());
    }
  }
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...mergedParts, ...leftSubArr, ...rightSubArr];
}

const mergeSort = arr => {
  const mid = Math.floor(arr.length / 2);
  // Base case or terminating case
  if(arr.length < 2){
    return arr;
  }
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

const partition = (arr, low, high) => {
  let i = low;
  let j = high + 1;
  let pivot = arr[low];
  while(true){
    while(arr[++i] < pivot){
      if(i === high) break;
    }
    while(pivot < arr[--j]){
      if(j === low) break;
    }
    if(i >= j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  //поменять опорный с текущим
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}

const sortDivider = (arr, low, high) => {
  if(high <= low) {
    return;
  }
  // разделить для последующей сортировки частей
  let j = partition(arr, low, high);
  sortDivider(arr, low, j - 1);
  sortDivider(arr, j + 1, high);
}

const quickSort = (arr) => {
  sortDivider(arr, 0, arr.length - 1);
  return arr;
}

const arr = [23, 41, 25, 54, 18, 14];
console.log(mergeSort(arr));
console.log(shellSort(arr));
console.log(insertionSort(arr));
console.log(bubbleSort(arr));
console.log(selectionSort(arr));
quickSort(arr);
console.log(arr);