"""Implement a function recursively to get the desired
Fibonacci sequence value.
Your code should have the same input/output as the 
iterative code in the instructions."""
import time

# Store results in cache.
resultsCache = {}

def get_fib(position):
    if position == 0:
        return 0
    if position == 1:
        return 1

    return get_fib(position - 1) + get_fib(position - 2) 

def get_fib_dynamic(position):
    #Check to see if we have the result in our cache already.
        if position in resultsCache:
            return resultsCache[position]

        if position == 0:
            return 0

        if position == 1:
            return 1
        
        resultsCache[position] = get_fib_dynamic(position - 1) + get_fib_dynamic(position - 2) 
        return resultsCache[position]


# Test cases
print 'Dynamic:'
startTime = time.time()
print get_fib_dynamic(20)
#print get_fib_dynamic(11)
#print get_fib_dynamic(0)
print time.time() - startTime

print 'Non dynamic:'
startTime = time.time()
print get_fib(20)
#print get_fib(11)
#print get_fib(0)
print time.time() - startTime

