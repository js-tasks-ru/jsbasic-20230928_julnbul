function highlight(table) {
  let bodyTable = table.querySelector("tbody");
  for (let i = 0; i < bodyTable.rows.length; i++) {
    let row = bodyTable.rows[i];
    row.cells[3].dataset.available == "true"
      ? row.classList.add("available")
      : row.cells[3].dataset.available == "false"
      ? row.classList.add("unavailable")
      : (row.hidden = true);

    row.cells[2].textContent == "m"
      ? row.classList.add("male")
      : row.classList.add("female");

    if (row.cells[1].textContent < 18) row.style.textDecoration = "line-through";
  }
}
