const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
    age: 20,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
    age: 18,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
    age: 30,
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
  function compareAges(a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -11;
    }
    return 0;
  }
  const namesList = users
    .sort(compareAges)
    .filter((element) => element.isActive == true)
    .map((element) => element.name);
  console.log("sort", namesList);
}

createUserNameListWithMap(users);
