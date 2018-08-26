const products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 9 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 }
];

const filteredProducts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}

filteredProducts;

products.filter((product) => {
  return product.type === 'vegetable';
});

// Type is 'vegetable', quantity is greater than 0, price is less than 10

products.filter((product) => {
  return (
    product.type === 'vegetable' && product.quantity > 0 && product.price < 10
  );
});
console.log(products);

// Another example

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

// filtering values

const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter((number) => number > 50);

console.log(filteredNumbers);
