function makeSandwiches(...items:string[]) {
    console.log("Sandwitch Order:");
    for(let i = 0; i < items.length; i++) {
      console.log(`- ${items[i]}`);
    }
    console.log("Enjoy your Sandwich!");
}

makeSandwiches('Lettuce', 'Tomato', 'Cheese');
makeSandwiches('Ham', 'Mayo');
makeSandwiches('Chicken');