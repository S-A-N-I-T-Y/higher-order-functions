/** Higher other functions
 * Is a function that accepts a function as a parameter or a function that returns another function.
 */

let musics = [
  { genre: "trap music", song: "mo bamba", artist: "sheck wes", year: 2017 },
  { genre: "rap", song: "godzilla", artist: "eminem", year: 2018 },
  {
    genre: "trap music",
    song: "sicko mode",
    artist: "travis scott",
    year: 2019,
  },
  { genre: "afro cultism", song: "declan rice", artist: "odumodu", year: 2023 },
  { genre: "afro beats", song: "come closer", artist: "wizkid", year: 2017 },
  { genre: "afro beats", song: "war machine", artist: "rema", year: 2024 },
  { genre: "gospel", song: "excess love", artist: "mercy chinwo", year: 2016 },
  { genre: "rap", song: "not like us", artist: "kendrick lamar", year: 2024 },
  {
    genre: "afro beats",
    song: "cash app",
    artist: "bella shmurda",
    year: 2020,
  },
  { genre: "afro beats", song: "understand", artist: "omah lay", year: 2021 },
  { genre: "afro beats", song: "bounce", artist: "ruger", year: 2022 },
  {
    genre: "mumble rap",
    song: "whole lotta red",
    artist: "playboi carti",
    year: 2018,
  },
];

// using forEach

// Get all music genre
musics.forEach((music) => console.log(music.genre));

musics.forEach((music) => {
  console.log(
    `Hello ${music.artist}, i love your song "${music.song}", which you released in ${music.year}, it has to be one of the the best ${music.genre} song i have ever heard.`
  );
});

// Using filter

// Check for artist name  that contains re
let afroRema = musics.filter((music) => {
  if (music.artist.includes("re")) return true;
});
console.log(afroRema);

// Check for all afrobeats and return their artists
let afroMusicians = musics.filter((music) => {
  if (music.genre == "afro beats") {
    console.log(music.artist);
  }
});

// Check for songs below 2020
let songYear = musics.filter((music) => {
  if (music.year < 2020) {
    return true;
  }
});

console.log(songYear);

// check for gospel music
musics.filter((music) =>
  music.genre === "gospel" ? console.log(music) : false
);

// using map
// getting all songs genres
let musicGenre;
musicGenre = musics.map((music) => {
  return music.genre;
});

console.log(musicGenre);

// Get all music year
let musicYear = musics.map((music) => music.year);
console.log(musicYear);

// Using sort
// Get all music from lowest year of 2016 to highest year of 2024

let ascendingYear = musics.sort((a, b) => {
  if (a.year - b.year) {
    return a;
  }
  false;
});

console.log(ascendingYear);

// working with reduce
let SongYearTotal = musics.reduce((total, year) => {
  return total + year.year;
}, 0);

console.log(SongYearTotal);
