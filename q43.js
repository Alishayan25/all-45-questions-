var magicianNames = ["Harry Porter", "Pinkro", "David Copperfield", "Neuro", "Hermione Granger"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) {
        "The Great ".concat(magician);
        console.log(greatMagicians);
    });
}
var greatMagicians = makeGreat(magicianNames);
console.log("\tOriginal Magicians:");
show_magicians(magicianNames);
console.log("\n\tGreat Magicians");
show_magicians(magicianNames);
