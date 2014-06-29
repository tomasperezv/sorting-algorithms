/**
 * @param {Array} a
 */
var insertionSort = function(a) {
  var i, j;
  for (i = 0; i < a.length; i++) {
    var currentValue = a[i];
    j = i - 1;
    while (j >= 0 && currentValue < a[j]) {
      a[j+1] = a[j];
      j--;
    }
    a[j+1] = currentValue;
  }
};

// Test the algorithm
var input = [1, 0, -1, 10, 40, 4, 2, 3];
insertionSort(input);
console.log(input);
