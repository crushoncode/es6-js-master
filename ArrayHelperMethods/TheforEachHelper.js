const dev = ['frontend', 'backend', 'devOps'];

// pass each element in the dev array to the iterator function
dev.forEach((dev) => {
  console.log(dev);
});

// 1)
// Create an array of numbers
const nums = [1, 2, 3, 4, 5];
// Create a variable to hold the sum
let sum = 0;
// Loop over the array, incrementing the sum variable
num.forEach((num) => {
  sum += num;
});
// print the sum variable
sum;

// 2)
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

// 3) refactor the code below
// function handlePosts() {
//     var posts = [
//       { id: 23, title: 'Daily JS News' },
//       { id: 52, title: 'Code Refactor City' },
//       { id: 105, title: 'The Brightest Ruby' }
//     ];

//     for (var i = 0; i < posts.length; i++) {
//       savePost(posts[i]);
//     }
// }
// solution
// const handlePosts = () => {
//     const posts = [
//         { id: 23, title: 'Daily JS News' },
//         { id: 52, title: 'Code Refactor City' },
//         { id: 105, title: 'The Brightest Ruby' }
//     ]

//     posts.forEach((post) = {
//         savePost(post)
//     })
// }

// 4) processing values
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

// const areas = [];
// images.forEach(function(image) {
//   let area = image.height * image.width;
//   areas.push(area);
// });
// console.log(areas);
