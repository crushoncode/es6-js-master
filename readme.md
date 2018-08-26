# ES6 Javascript Development from Scratch

This repository contains code regarding ES6 features and its syntax. I have learnt about the essential parts of ES6 javascript through the tutorial(ES6 Javascript - Stephen Grider).

## Array Helper Methods

## - forEach

ex 1)

```javascript
const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

const areas = [];
images.forEach((image) => {
  areas.push(image.height * image.width);
});
console.log(areas);
```

ex 2)

```javacript
// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];
// Create a variable to hold the sum
let sumValue = 0;
const adder = (number) => {
  sumValue += number;
};
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);
// print the sum variable
sum;
```

## - Map

ex 1)

```javascript
const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

const speeds = trips.map((trip) => trip.distance / trip.time);

speeds;
```

ex 2)

```javascript
const pluck = (array, property) => {
  return array.map((obj) => obj[property]);
};
```

## - Filter

ex 1)

```javascript
const post = { id: 4, title: 'New Post' };
const comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

const commentsForPost = (post, comments) => {
  return comments.filter((comment) => {
    return comment.postId === post.id;
  });
};

console.log(commentsForPost(post, comments));
```

ex 2)

```javascript
const users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

const filteredUsers = users.filter((user) => user.admin);

console.log(filteredUsers);
```

ex 3)

```javascript
const reject = (array, iteratorFunc) => {
  return array.filter((x) => !iteratorFunc(x));
};
```
