```javascript
const query = { name: /John/i }; // Case-insensitive search

// Using $regex operator with case-insensitive flag
const query2 = { name: { $regex: 'John', $options: 'i' } }; 

//Incorrect usage of regex, this may lead to unexpected results 
const query3 = { name: { $regex: /John/ } };
```