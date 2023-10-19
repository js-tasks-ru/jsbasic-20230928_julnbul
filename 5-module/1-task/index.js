function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  let hidden = () => btn.hidden = true;
  btn.onclick = hidden;
}
//второй вариант
/* 
function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
  function hidden() {
    btn.hidden = true;
  }
  btn.addEventListener('click', hidden);
}
*/

/* третий вариант
function hideSelf() {
  let btn = document.querySelector('.hide-self-button');
   btn.onclick = function () {
    this.hidden = true;
  };
}
*/


