let obj = {
  liked: [
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Doe", age: 30 },
    { id: 3, name: "John Smith", age: 40 },
  ],
  disliked: [
    { id: 4, name: "Jason Doe", age: 20 },
    { id: 5, name: "Josh Doe", age: 30 },
    { id: 6, name: "Karen Smith", age: 40 },
  ],
  loved: [
    { id: 7, name: "Jasmine Doe", age: 20 },
    { id: 8, name: "Bob Doe", age: 30 },
    { id: 9, name: "Tom Smith", age: 40 },
  ],
};

let reactions = Object.keys(obj);
const arr = [];

for (let i = 0; i <= reactions.length - 1; i++) {
  let reactArr = obj[reactions[i]];

  for (let j = 0; j <= reactArr.length - 1; j++) {
    arr.push({ ...reactArr[j], reaction: reactions[i] });
  }
}

console.log(arr);
