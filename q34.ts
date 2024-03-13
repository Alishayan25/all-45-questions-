const pizza: string[] = ["chicken with chese", "veg with olives", "fish with mashrooms"];

for (const names of pizza) {
    console.log(`I just love ${names} flavour pizza`);
}

// Add a line at the end of your program, outside the for loop, that states how much you like pizza
console.log('I really love pizza!');
console.log('My favorite kinds of pizza are:');

for (const names of pizza) {
    console.log(`- ${names}`);
}

console.log('I really love pizza!');