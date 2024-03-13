function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var city4 = city_country("Lahore", "Pakistan");
var city5 = city_country("Tokyo", "Japan");
var city6 = city_country("Paris", "France");
console.log(city4);
console.log(city5);
console.log(city6);
function make_great(magicians1) {
    for (var i = 0; i < magicians1.length; i++) {
        magicians1[i] = "the Great ".concat(magicians1[i]);
    }
}
// Function to show magicians
function show_magicians(magicians1) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magicians1_1 = magicians_1[_i];
        console.log(magicians1_1);
    }
}
// Array of magicians
var magicians1 = ["Merlin", "Gandalf", "Dumbledore"];
// Calling make_great to modify the array
make_great(magicians1);
// Calling show_magicians to see the modified list
show_magicians(magicians1);
