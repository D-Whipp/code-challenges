// her method
const username = Symbol('username');
const password = Symbol('password');

const user = {
  [username]: 'emmabostian',
  [password]: '1234567',
  age: 27,
};

console.log(user.username, user.password);
