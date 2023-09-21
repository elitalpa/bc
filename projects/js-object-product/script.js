const product = {
    name: "iPhone 15",
    inStock: true,
    price: 1249.90,
    includedInPackage: ["case", "cable", "manual"]
};

console.log("The second item included in the package that this iPhone product comes with: \n" + product["includedInPackage"][1]);
