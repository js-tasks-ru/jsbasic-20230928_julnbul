//запись решения в учебнике видела, мой код выглядит по-другому, т.к. пока сложно
//отслеживать логику без промежуточных точек

 
//по аналогии с учебником
function camelize(str) {
    //массив слов без "-"
    let arr = str.split("-");
    //массив слов с заглавными
    let newArr = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
    //строка из массива
    let newStr = newArr.join('');
    return newStr;
}


/*
//без join(), сразу в строку
function camelize(str) {
  let arr = str.split("-");
  console.log(arr);
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    (i == 0) ? arr[i] = arr[i] :
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1); 
    newStr += arr[i];
  }
  return newStr; 
}
*/

/*
// краткая запись условного выражения
function camelize(str) {
  let arr = str.split("-");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) { 
    newArr.push(
      i == 0
        ? (arr[i] = arr[i])
        : (arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1))
    );
  }
  let newStr = newArr.join("");
  return newStr;
}
*/

/*  
//условное выражение
function camelize(str) {
  let arr = str.split("-");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {  
    if (i == 0) {
      arr[i] = arr[i];
    }
    else if (i > 0){
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
    newArr.push (arr[i]);
  }
   let newStr = newArr.join("");
  return newStr;
}
*/




