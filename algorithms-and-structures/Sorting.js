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
const arr = [23, 41, 25, 54, 18, 14];
console.log(bubbleSort(arr));
console.log(selectionSort(arr));