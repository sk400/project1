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
  {
    name: "Rashmi",
    age: 30,
  },
];

const users = data.map((user) => user.name);

const separator = "*--------------------------*";

const message =
  "To get something you never had you have to do something you never did";

const randomUserIndex = Math.floor(Math.random() * 4);

data.forEach((item) => {
  if (item.age > 18) {
    if (item.name === "Rashmi") {
      console.log("Rashmi bhai, Good morning");
    } else {
      const logText = `${item.name}, remember this quote "${message}"`;
      console.log(logText);
      console.log(separator);
    }
  } else {
    const ageDifference = 18 - item.age;
    console.log(`${item.name}, wait for ${ageDifference} years to know more.`);
  }
});

const randomUser = data[randomUserIndex];

console.log(randomUser.name);
