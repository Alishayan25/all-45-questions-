function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// albums banow function sa  make_album 
var album1 = make_album("asim ", "khanai");
var album2 = make_album("salman", "junijooo", 12);
var album3 = make_album("sami", "moooo");
// Printing each 
console.log(album1);
console.log(album2);
console.log(album3);
