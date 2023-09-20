const initialArray = [
    null,
    true,
    ["Apple", "two", undefined],
    false,
    ["three", "BeCode"],
    4,
    "I am a big bad wolf",
    ["one"],
];

console.log("initialArray before changes: \n" + initialArray);

initialArray.shift();

initialArray[0] = initialArray.pop();
initialArray[1] = initialArray[1][1];
initialArray[2] = initialArray[3][0];

initialArray.pop();
initialArray.pop();
initialArray.pop();

console.log("initialArray after changes: \n" + initialArray);
