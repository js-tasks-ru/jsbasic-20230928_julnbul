function filterRange(arr, a, b) {
  let arrRezult = [];
  for (let elem of arr) {
    if (elem >= a && elem <= b) {
      arrRezult.push(elem);
    }
  } 
  return arrRezult;
}
