from collections import deque 

def bubbleSort(a):
    while True:
        swapped = False

        for i in range(1, len(a)):
            if a[i - 1] > a[i]:
                # Swap without variables... 
                print a[i - 1], ' > ', a[i] 
                a[i - 1] = a[i - 1] + a[i]
                a[i] = a[i - 1] - a[i]
                a[i - 1] = a[i - 1] - a[i]
                swapped = True
                print a

        if swapped == False:
            break

    return a


def swap(x, y):
    x = x + y
    y = x - y
    x = x - y

    print '(', x, ', ', y, ')'
    return x,y


'''
Merge Sort
'''
# Helper function
def mergeSortHelper(s):
    low = 0
    high = len(s) -1
    mergeSort(s, low, high)
    return s

# Merge sort that is called recursively
def mergeSort(s, low, high):
    if low < high:
        # Calculate the middle.  Is this ok? Should I do len(s) / 2?... I need to get better at these intuitions.
        middle = (low + high) / 2
        mergeSort(s, low, middle)
        mergeSort(s, middle + 1, high)
        merge(s, low, middle, high)

# Once we have our simplest sub array, we must then combine them back together in order.
def merge(s, low, middle, high):
    print 'Merging with ', s, ' ', low, ' ', middle, ' ', high
    q1 = deque([])
    q2 = deque([])

    # Fill our queues. 
    for i in range(low, middle + 1):
        q1.append(s[i])

    for i in range(middle + 1, high + 1):
        q2.append(s[i])

    # Compare the values in both queues and put them into the s array.
    i = low 
    while len(q1) > 0 and len(q2) > 0:
        if q1[0] < q2[0]:
            s[i] = q1.popleft()
        else:
            s[i] = q2.popleft()

        i += 1

    # One of our queues may still have values, empty the rest of the values into s.
    # q1 is empty, put the rest of q2 into s.
    if len(q1) == 0 and len(q2) > 0:
        while len(q2) > 0:
            s[i] = q2.popleft()
            i += 1        

    # q2 is empty, put the rest of q1 into s.
    elif len(q2) == 0 and len(q1) > 0:
        while len(q1) > 0:
            s[i] = q1.popleft()
            i += 1        

'''
Quick sort
'''

def quickSort(s, low, high):
    if high - low > 0:
        p = partition(s, low, high)
        quickSort(s, low, p - 1)
        quickSort(s, p + 1, high)

    return s

def partition(s, low, high):
    firstHigh = low
    p = high

    for i in range(low, high):
        if s[i] < s[p]:
            s[firstHigh], s[i] = s[i], s[firstHigh]
            firstHigh += 1
            print firstHigh

    s[p], s[firstHigh] = s[firstHigh], s[p]

    return firstHigh



test1 = [21,4,1,3,9,20,25,6,21]
# print mergeSortHelper(test1)
print quickSort(test1, 0, len(test1) - 1)

'''
x = 10
y = 5

x, y = swap(x,y)
print x, y
'''
