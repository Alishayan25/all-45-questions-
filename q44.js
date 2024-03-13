function makeSandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwitch Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("- ".concat(items[i]));
    }
    console.log("Enjoy your Sandwich!");
}
makeSandwiches('Lettuce', 'Tomato', 'Cheese');
makeSandwiches('Ham', 'Mayo');
makeSandwiches('Chicken');
