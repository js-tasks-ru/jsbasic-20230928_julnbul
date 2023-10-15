function getMinMax(str) {
   let arr = str.split(" ");
  let newArr = [];
  for (let elem of arr) {
    if (!isNaN(elem)) newArr.push(elem);
  }
  let max = Math.max(...newArr);
  let min = Math.min(...newArr);
  return { min: min, max: max };
}
