function makeFriendsList(friends) {
  let list = document.createElement("ul");
  document.body.append(list);
  list.insertAdjacentHTML(
    "beforeend",
    friends
      .map((elem) => `<li>${elem.firstName + " " + elem.lastName}</li>`)
      .join("")
  );
  return list;
}

// второй вариант
/* 
function makeFriendsList(friends) {
  let list = document.createElement("ul"); //создаю элемент ul
  document.body.append(list); //добавляю его на страницу
  for (let elem of friends) {
    let elemList = document.createElement("li"); //создаю элемент li
    elemList.textContent = elem.firstName + " " + elem.lastName; // добавляю текстовое содержимое
    list.append(elemList); //добавляю его на страницу
  }
  return list;
}
*/
