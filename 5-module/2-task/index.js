
function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.onclick = function () {
    text.hidden == true ? text.hidden = false : text.hidden = true;
  }
}

/* в браузере работает, а тесты почему-то не проходит
function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  button.onclick = () => text.classList.toggle('hidden');
}
*/
