let request  	 = new XMLHttpRequest();
let url          = 'http://www.omdbapi.com/?t=stargate&apikey=3c33b80';
let basic        = document.getElementById('basic-info');
let ratings      = document.getElementById('ratings');
let etc          = document.getElementById('etc-info');
let content 	 = document.getElementById('content');
let subject 	 = '';



request.onreadystatechange = function() {
	if (this.readyState === 4 && this.status === 200) {
		console.log(this.responseText);
		let info = JSON.parse(this.responseText);
		console.log(info);

		if (subject === 'basic-info') {
			content.innerHTML += '<p>' + '<b>Year: </b>' + info.Year + '</p>';
			content.innerHTML += '<p>' + '<b>Rated: </b>' + info.Rated + '</p>';
			content.innerHTML += '<p>' + '<b>Released: </b>' + info.Released + '</p>';
			content.innerHTML += '<p>' + '<b>Runtime: </b>' + info.Runtime + '</p>';
			content.innerHTML += '<p>' + '<b>Genre: </b>' + info.Genre + '</p>';
			content.innerHTML += '<p>' + '<b>Director: </b>' + info.Director + '</p>';
			content.innerHTML += '<p>' + '<b>Writer: </b>' + info.Writer + '</p>';		
			content.innerHTML += '<p>' + '<b>Actors: </b>' + info.Actors + '</p>';
			content.innerHTML += '<p>' + '<b>Plot: </b>' + info.Plot + '</p>';
			content.innerHTML += '<p>' + '<b>Language: </b>' + info.Language + '</p>';
			content.innerHTML += '<p>' + '<b>Country: </b>' + info.Country + '</p>';
			content.innerHTML += '<p>' + '<b>Awards: </b>' + info.Awards + '</p>';
		} 
		else if (subject === 'ratings') {
			for (let i=0; i<info.Ratings.length; i++) {
				content.innerHTML += '<p>' + '<b>Source: </b>' + info.Ratings[i].Source + '<br>' + '<b>Value: </b>' + info.Ratings[i].Value + '</p>';
			}
		} 
		else if (subject === 'etc-info') {
			content.innerHTML += '<p>' + '<b>Meta score: </b>' + info.Metascore + '</p>';
			content.innerHTML += '<p>' + '<b>IMDb rating: </b>' + info.imdbRating + '</p>';
			content.innerHTML += '<p>' + '<b>IMDb votes: </b>' + info.imdbVotes + '</p>';
			content.innerHTML += '<p>' + '<b>IMDb ID: </b>' + info.imdbID + '</p>';
			content.innerHTML += '<p>' + '<b>Type: </b>' + info.Type + '</p>';
			content.innerHTML += '<p>' + '<b>DVD: </b>' + info.DVD + '</p>';
			content.innerHTML += '<p>' + '<b>Box Office: </b>' + info.BoxOffice + '</p>';
			content.innerHTML += '<p>' + '<b>Production: </b>' + info.Production + '</p>';
			content.innerHTML += '<p>' + '<b>Website: </b>' + info.Website + '</p>';
			content.innerHTML += '<p>' + '<b>Response: </b>' + info.Response + '</p>';
		}

	}
}



basic.addEventListener('click', function() {
	content.innerHTML='';
	subject = this.id;
	request.open('GET', 'http://www.omdbapi.com/?t=stargate&apikey=3c33b80');
	request.send();
});

ratings.addEventListener('click', function() {
	content.innerHTML='';
	subject = this.id;
	request.open('GET', 'http://www.omdbapi.com/?t=stargate&apikey=3c33b80');
	request.send();
});

etc.addEventListener('click', function() {
	content.innerHTML='';
	subject = this.id;
	request.open('GET', 'http://www.omdbapi.com/?t=stargate&apikey=3c33b80');
	request.send();
});