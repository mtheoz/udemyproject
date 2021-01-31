"use strict";

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '0');
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
let mName1 = prompt('Название фильма');
let mRating1 = prompt('Рейтинг фильма');
let mName2 = prompt('Название фильма');
let mRating2 = prompt('Рейтинг фильма');

personalMovieDB.movies[mName1] = mRating1;
personalMovieDB.movies[mName2] = mRating2;
console.log(personalMovieDB);