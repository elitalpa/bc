const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
let result = "";

for (let i = animals.length - 1; i >= 0; i--) {
    result += `"${animals[i]}" `;
}

console.log(result); // "bird" "cat" "dog" "zebra" "pangolim" "lion"
