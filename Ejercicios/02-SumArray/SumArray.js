function SumArray(arr, n) {
  // Your code here:
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr.length; j++) {
    if (arr[i] + arr[j] === n) {
      return true
    }
  }
}
}

module.exports = SumArray;
