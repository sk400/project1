const data = [
  {
    name: "user1",
    age: 15,
  },
  {
    name: "user2",
    age: 18,
  },
  {
    name: "user3",
    age: 20,
  },
];

const users = data.map((user) => user.name);
const message =
  "To get something you never had you have to do something you never did";

data.forEach((item) => {
  const logText = `${item.name}, remember this quote "${message}"`;
  console.log(logText);
});
