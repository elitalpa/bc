const seatingChart = [
    ["Colas", "Benoit", "Elodie"],
    ["Sola", "Irina", "Antonino", "Eli"],
    ["John", "Maryna", "Naike", "Fabrice"],
];
  
// I can use nested loops to do that :
  
for (let i = 0; i < seatingChart.length; i++) {
    console.log(`ROW #${i + 1}`);
    const row = seatingChart[i]; // I created a variable "row" just to be cleaner in the declaration of the next loop. You could put seatingChart[i].length, it would be the same thing
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}
