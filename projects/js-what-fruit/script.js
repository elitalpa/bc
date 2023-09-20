const input = prompt("What is your favorite fruit ?");
const fruit = input.toLowerCase();

switch (fruit) {
  case "bananas":
    alert("I also like bananas :)");
    break;
  case "strawberry":
    alert("I LOVE strawberries ! (•̪ o •̪)");
    break;
  case "grape":
    const grapeColor = prompt("Do you prefer purple or green grapes ?");
    if (grapeColor.toLowerCase() == "purple") {
      alert("I don't like purple grapes ^_^\"");
      break;
    } else if (grapeColor.toLowerCase() == "green") {
      alert("Green grapes are ok ! (•‿•)");
      break;
    } else {
      alert("I don't understand :/");
    }
  default:
    alert(`You said ${input} and I don't understand :/`)
    break;
}
