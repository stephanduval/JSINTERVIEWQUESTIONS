const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  },
];

// function createUserNameList(userList) {
//   const userNameList = [];
//   userList.forEach((element) => userNameList.push(element.name));
//   return userNameList;
// }
// createUserNameList(users);
// console.log(createUserNameList(users));

function createUserNameListWithMap(userList) {
  const namesList = users
    .filter((element) => element.isActive == true)
    .map((element) => element.name);
  console.log(namesList);
}

createUserNameListWithMap(users);
