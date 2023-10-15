function showSalary(users, age) {
  let newUsers = users.filter((elem => elem.age <= age));
  let arrUsers = newUsers.map(elem => (elem.name + ', ' + elem.balance));
  return arrUsers.join('\n');
}
