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

const arr = [23, 41, 25, 54, 18, 14];
console.log(insertionSort(arr));
console.log(bubbleSort(arr));
console.log(selectionSort(arr));