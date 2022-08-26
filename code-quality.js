async function getUsers(users) {
  return users.map((user, index) => ({ ...user, id: index }));
}
