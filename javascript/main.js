
var SoundCloudApi={};

SoundCloudApi.init=function(){

	//SOUNDCLOUD API QUERY

	SC.initialize({
  	client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

}

SoundCloudApi.getTracks=function(input){

	// find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
SC.get('/tracks', {
genres: input, bpm: { from: 120 }
}).then(function(tracks) {
  console.log(tracks);
});
}

SoundCloudApi.renderTracks=function(){

	var card=document.createElement('div');
		card.classList.add("card");

	var CardImage=document.createElement('div');
		CardImage.classList.add("card_image");

	var Img=document.createElement('img');
		Img.classList.add("img");
		Img.src="https://i.redd.it/b3esnz5ra34y.jpg";

		CardImage.appendChild(Img);

	var CardTitle=document.createElement('div');
		CardTitle.classList.add("card_title");

	var P=document.createElement('p');
		P.classList.add("p");
		P.innerHTML='<a href="https://soundcloud.com/barsuk-records/rilo-kiley-science-vs-romance" target="_blank">Wow';

	CardTitle.appendChild(P);

	card.appendChild(CardImage);
	card.appendChild(CardTitle);
	
	var SearchResults=document.querySelector('.search-results');
	SearchResults.appendChild(card);
		
}


SoundCloudApi.init();
SoundCloudApi.getTracks('rock');
SoundCloudApi.renderTracks();