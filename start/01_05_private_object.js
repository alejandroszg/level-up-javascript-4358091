// Write your code here
const username = Symbol("user");
const password = Symbol("pass");

const user = {
  [username]: "alejandro",
  [password]: 123456,
  age: 20
}

console.log(user)
console.log(user.username)
console.log(user.password)