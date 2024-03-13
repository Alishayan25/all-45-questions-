let magicianNames: string[] = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];

function show_magicians(magicians:string[]):void {
  for(let magician of magicians) {
    console.log(magician);
  }
}

function makeGreat(magicians:string[]) {
      let greatMagicians:void[] = magicians.map((magician) => {
          `The Great ${magician}`;
          console.log(greatMagicians);
      });
} 

const greatMagicians = makeGreat(magicianNames);
console.log("\tOriginal Magicians:");
show_magicians(magicianNames);
console.log("\n\tGreat Magicians");
show_magicians(magicianNames);