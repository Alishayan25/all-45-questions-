

type Fruit = {
    name: string;
    color: string;
    taste: string;
};

const fruits: { [fruitName: string]: Fruit } = {
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
for (const fruitName in fruits) {
    const { name, color, taste } = fruits[fruitName];
    console.log(`${name}: Color - ${color}, Taste - ${taste}`);
}

