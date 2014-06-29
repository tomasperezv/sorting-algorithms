'''
Example of an implementation of insertion sort in Python
'''

def insertionSort(a):
    for i in range(len(a)):
        currentValue = a[i]
        j = i - 1
        while j >= 0 and a[j] > currentValue:
            a[j+1] = a[j]
            j = j - 1
        a[j+1] = currentValue

# Test the algorithm
input = [1, 0, -1, 10, 40, 4, 2, 3];
insertionSort(input);
print input
