function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const city4 = city_country("Lahore", "Pakistan");
const city5 = city_country("Tokyo", "Japan");
const city6 = city_country("Paris", "France");

console.log(city4);
console.log(city5);
console.log(city6);

function make_great(magicians1: string[]): void {
    for (let i = 0; i < magicians1.length; i++) {
        magicians1[i] = `the Great ${magicians1[i]}`;
    }
}

// Function to show magicians
function show_magicians(magicians1: string[]): void {
    for (const magicians1 of magicians) {
        console.log(magicians1);
    }
}

// Array of magicians
const magicians1: string[] = ["Merlin", "Gandalf", "Dumbledore"];

// Calling make_great to modify the array
make_great(magicians1);

// Calling show_magicians to see the modified list
show_magicians(magicians1);
