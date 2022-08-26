let inputString = "a:2,b:3,c:4,a:5,b:6";

let arr = inputString.split(",");
let map = new Map();

for (let i = 0; i <= arr.length - 1; i++) {
  let key = arr[i][0];
  if (map.has(key)) {
    map.set(key, map.get(key) + Number.parseInt(arr[i].slice(2)));
  } else {
    map.set(key, Number.parseInt(arr[i].slice(2)));
  }
}

let answer = Object.fromEntries(map);
