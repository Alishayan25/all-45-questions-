function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

// Calling the function to show magicians
showMagicians(magicians);
