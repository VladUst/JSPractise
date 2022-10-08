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

const arr = [23, 41, 25, 54, 18, 14];
console.log(shellSort(arr));
console.log(insertionSort(arr));
console.log(bubbleSort(arr));
console.log(selectionSort(arr));