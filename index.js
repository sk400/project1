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
    name: "Dhiu",
    age: 5,
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

data.forEach((item) => {
  if(item.name !== 'Rashmi'){
    const logText = `${item.name}, remember this quote "${message}"`;
    console.log(logText);
    console.log(separator);
  } else {
    console.log("Rashmi bhai, Good morning")
  } 
});
