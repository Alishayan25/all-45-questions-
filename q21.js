var fruits = {
    apple: {
        name: "Apple",
        color: "Red",
        taste: "Sweet and tart"
    },
    banana: {
        name: "Banana",
        color: "Yellow",
        taste: "Sweet"
    },
    orange: {
        name: "Orange",
        color: "Orange",
        taste: "Sweet and tangy"
    },
    grape: {
        name: "Grape",
        color: "Purple, green, red",
        taste: "Sweet and juicy"
    }
};
// Accessing information about each fruit
console.log("Information about fruits:");
for (var fruitName in fruits) {
    var _a = fruits[fruitName], name_1 = _a.name, color = _a.color, taste = _a.taste;
    console.log("".concat(name_1, ": Color - ").concat(color, ", Taste - ").concat(taste));
}
