
/**
 * @param {Array} a
 * @param {Number} i
 * @param {Number} j
 * @method swap
 * @public
 */
var swap = function(a, i, j) {
  var tmp = a[i];
  a[i] = a[j];
  a[j] = tmp;
};

/**
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @return {Number} pivotIndex
 * @method partition
 * @public
 */
var partition = function(a, left, right) {

  var pivotIndex = Math.floor((right+left)/2),
      pivotValue = a[pivotIndex],
      sortedIndex = left,
      i = 0;

  swap(a, pivotIndex, right);

  for (i = left; i < right; i++) {
    if (a[i] <= pivotValue) {
      swap(a, i, sortedIndex);
      sortedIndex++;
    }
  }

  swap(a, sortedIndex, right);

  return sortedIndex;

};

/**
 * @param {Array} a
 * @param {Number} left
 * @param {Number} right
 * @method partition
 * @public
 */
var quicksort = function(a, left, right) {

  if (typeof left === 'undefined' && typeof right === 'undefined') {
    left = 0;
    right = (a.length - 1);
  }

  if (left < right) {
    var p = partition(a, left, right);
    quicksort(a, left, p-1);
    quicksort(a, p+1, right);
  }

};

// Test the algorithm
var input = [1, 0, -1, 10, 40, 4, 2, 3];
quicksort(input);
console.log(input);
