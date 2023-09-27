const commandsList = "\n    'new' to add a todo \n    'list' to see all the todos \n    'delete' to remove a specific todo \n    'quit' to exit de program \n";

let todoList = [];

let isFinished = false;

while (!isFinished) {
    let input = prompt(`Enter one of the following commands: ${commandsList} \nWhat is your action ?`);
    let command = input.toLowerCase();

    switch (command) {
        case "new":
            let todo = prompt("What is the todo ?")
            todoList.push(todo);
    
            console.log("The following todo was added to the list: \n" + todo);
    
            break;
        case "list":
            console.log("********* TODO LIST *********");
            let n = 1;
            for (let item of todoList) {
                console.log(`${n++}. ${item}`);
            }
    
            break;
        case "delete":
            let deleteIndex = prompt("What is the number of the todo you wish to delete ?");

            const asciiZero = "0".charCodeAt(0); // 48
            const asciiNine = "9".charCodeAt(0); // 57
            let isIndexANumber = true;

            for (let i = 0; i < deleteIndex.length; i++) {
                if (deleteIndex.charCodeAt(i) < asciiZero || deleteIndex.charCodeAt(i) > asciiNine) {
                    isIndexANumber = false;
                    alert(`Not a number. Can't delete.`);
                    break;
                }
            }
    
            if (isIndexANumber && deleteIndex > 0 && deleteIndex <= todoList.length) {
                deleteIndex--;
                todoList.splice(deleteIndex, 1);
                console.log("The todo with the specified number was deleted.");
            } else if (isIndexANumber) {
                alert("Not a todo number. Can't delete.")
            }
            break;
        case "quit":
            isFinished = true;
            break;
        default:
            alert(`${input} \nis not a command.`)
            break;
    }
}


