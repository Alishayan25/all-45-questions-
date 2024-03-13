interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title};
    
    
    
        if (tracks !== undefined) { album.tracks = tracks; }
    return album;
}

// albums banow function sa  make_album 
const album1 = make_album("asim ", "khanai");
const album2 = make_album("salman", "junijooo", 12);
const album3 = make_album("sami", "moooo");

// Printing each 
console.log(album1);
console.log(album2);
console.log(album3);
