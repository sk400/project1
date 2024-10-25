const data = [
  {
    name: "Arjun",
    age: 15,
  },
  {
    name: "Krishna",
    age: 18,
  },
  {
    name: "Duryodhan",
    age: 20,
  },
];

const users = data.map((user) => user.name);

const separator = "*--------------------------*";

const message =
  "To get something you never had you have to do something you never did";

data.forEach((item) => {
  const logText = `${item.name}, remember this quote "${message}"`;
  console.log(logText);
  console.log(separator);
});
