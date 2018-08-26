// In large and complex applications, we want to avoid mutating.

const nums = [1, 2, 3];
const doubledNumbers = [];

for (let i = 0; i < nums.length; i++) {
  // nums[i] = nums[i] * 2; (mutating data)
  doubledNumbers.push(nums[i] * 2);
}

doubledNumbers;

// run iterator functions that each element is passed and returns brand new array
// not making any changes in the existing array
const doubled = nums.map((num) => {
  return num * 2;
});

doubled;

// MAP example

const languages = [
  { language: 'Spanish', level: 'advanced' },
  { language: 'Japanese', level: 'intermediate' }
];

const levels = languages.map((lang) => {
  return lang.level;
});

levels;

// plucking values

const images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' }
];

const heights = images.map((image) => {
  return image.height;
});

heights;

// calculating values with Map

const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

const speeds = trips.map((trip) => {
  return trip.distance / trip.time;
});

speeds;
