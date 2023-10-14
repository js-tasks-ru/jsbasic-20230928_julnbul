//другое решение по замечанию

function filterRange(arr, a, b) {
  return arr.filter((item) => item >= 1 && item <= 4);
}

/*
function filterRange(arr, a, b) {
  let arrRezult = [];
  for (let elem of arr) {
    if (elem >= a && elem <= b) {
      arrRezult.push(elem);
    }
  } 
  return arrRezult;
}
*/