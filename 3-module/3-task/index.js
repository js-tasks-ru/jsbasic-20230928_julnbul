//запись решения в учебнике видела, мой код выглядит по-другому, т.к. пока сложно 
//отслеживать логику без промежуточных точек

function camelize(str) {
    //массив слов без "-"
    let arr = str.split("-");
    //массив слов с заглавными
    let newArr = arr.map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1));
    //строка из массива
    let newStr = newArr.join('');
    return newStr;
}
