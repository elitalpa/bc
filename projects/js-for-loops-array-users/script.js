const users = [
    {
      firstName: "Vito",
      lastName: "Corleone",
    },
    {
      firstName: "William",
      lastName: "Wallace",
    },
    {
      firstName: "Harry",
      lastName: "Potter",
    },
    {
      firstName: "Amadeus",
      lastName: "Mozart",
    },
    {
      firstName: "Barack",
      lastName: "Obama",
    },
];

for (let i = 0; i < users.length; i++) {
    console.log(`${i + 1}. My full name is ${users[i]["firstName"]} ${users[i]["lastName"]}.`);
}

// 1. My full name is Vito Corleone.
// 2. My full name is William Wallace.
// 3. My full name is Harry Potter.
// 4. My full name is Amadeus Mozart.
// 5. My full name is Barack Obama.
