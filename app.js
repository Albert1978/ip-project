let numberOfFilms;

function start() {
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');
	}
}
start();

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

personalMovieDb.count = numberOfFilms;

// Часть 13

// const a = prompt('Один из последних просмотренных фильмов', ''),
// 		b = prompt('На сколько оцените его', ''),
// 		c = prompt('Один из последних просмотренных фильмов', ''),
// 		d = prompt('На сколько оцените его', '');

// personalMovieDb.movies[a] = b;
// personalMovieDb.movies[c] = d;
// =========================================================================

//Часть 2

function detectPersonalLevel() {
	if (personalMovieDb.count < 10) {
	alert('Просмотрено довольно мало фильмов');
	} else if (personalMovieDb.count >= 10 && personalMovieDb.count <= 30) {
	alert('Вы классический зритель');
	} else {
	alert('Вы киноман');
	}
}

// detectPersonalLevel()

function rememberMyFilms() {
	for (let i = 1; i < 3; i++) {
		let lastFilm = prompt('Один из последних просмотренных фильмов', '');

		let rating = prompt('На сколько оцените его', '');

		if (lastFilm != null && lastFilm != '' && lastFilm.length < 50 && rating != null && rating != '') {
			personalMovieDb.movies[lastFilm] = rating;
		} else {
			i--;
		}
	}
}

// rememberMyFilms();

// console.log(personalMovieDb);

//=================================================================

// Часть 3
function showMyDB(hidden) {
	if (!personalMovieDb.privat) {
		console.log(personalMovieDb);
	}
}

// showMyDB(personalMovieDb.privat);

function writeYourGenres() {
	let yourFavoriteGenre;
	for (let i = 1; i < 4; i++) {
		yourFavoriteGenre  = prompt(`Ваш любимый жанр под номером ${i}`, '');
		if (yourFavoriteGenre != '' && yourFavoriteGenre != null) {
			personalMovieDb.genres.push(yourFavoriteGenre);
		} else {
			i--;
		}
		
	}
	return personalMovieDb.genres;
}
console.log(writeYourGenres());