# Case-Insensitive Regex Error in MongoDB Query

This repository demonstrates a common error in MongoDB queries involving case-insensitive regular expressions.  The incorrect use of the `$regex` operator can lead to unexpected query results if the `$options` flag isn't correctly used for case-insensitive matching.

## Problem
The `bug.js` file shows an example of a case-insensitive search that may fail to return expected results due to the absence of the `$options: 'i'` flag in the regular expression object. This is a subtle error that could be difficult to debug.

## Solution
The `bugSolution.js` file illustrates the correct way to perform a case-insensitive query using the `$regex` operator along with the `$options` flag, ensuring the correct results are retrieved.  It also shows the different and correct ways of performing such queries.

## How to reproduce:
1. Clone this repository.
2. Run `bug.js` and `bugSolution.js` to see the different results.
