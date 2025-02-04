```javascript
// Correct usage of $regex with case-insensitive flag
const correctQuery = { name: { $regex: 'John', $options: 'i' } }; 

//Alternative correct query using the i flag directly in the regex
const correctQuery2 = { name: /John/i };
```