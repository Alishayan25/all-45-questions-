function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size} shirt with the message: "${message}"`);}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("Medium", "Typescript is a best for easy code ");

// Making a shirt of any size with a different message
make_shirt("Small", "TypeScript is awesome!");
