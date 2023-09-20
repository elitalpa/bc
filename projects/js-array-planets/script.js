const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
console.log("planets array before changes: \n" + planets);

planets.shift();
planets.push("Saturn");
planets.unshift("Mercury");

console.log("planets array after changes: \n" + planets);