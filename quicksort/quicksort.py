def swap(a, i, j):
    tmp = a[i]
    a[i] = a[j]
    a[j] = tmp

def partition(a, left, right):

    pivotIndex = (left+right) / 2
    pivotValue = a[pivotIndex]
    swap(a, pivotIndex, right)
    sortedIndex = left

    for i in range(left, right):
        if a[i] <= pivotValue:
            swap(a, i, sortedIndex)
            sortedIndex = sortedIndex + 1

    swap(a, right, sortedIndex)

    return sortedIndex

def quicksort(a, left, right):
    if (left < right):
        p = partition(a, left, right)
        quicksort(a, left, p-1)
        quicksort(a, p+1, right)

# Test the algorithm
input = [1, 0, -1, 10, 40, 4, 2, 3];
quicksort(input, 0, len(input)-1);
print input
