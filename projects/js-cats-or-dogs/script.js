const name = prompt("What's your name ?");
const choice = prompt("Which do you prefer, cats or dogs ? \n(enter the word 'cats' or the word 'dogs')")

switch (choice) {
    case "dogs":
        alert(`Woof, WOof ${name} ! \nSome say that dogs are man's best friend. Dogs are loyal!`);
        break;
    case "cats":
        alert(`Meow ${name}! \nCats are the secret rulers of the world and always land on their feet!`);
        break;
    
    default:
        alert(`Error. Reload the page and try again ;-)`);
        break;
}
