
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
		card.ClassList.add("card");

	var card_image=document.createElement('div');
		card_image.ClassList.add("card");
	var img=document.createElement('img');
		img.ClassList.add("img");

		var SearchResults=document.querySelector('.search-results');
		SearchResults.appendChild(card);
		
}


SoundCloudApi.init();
SoundCloudApi.getTracks('rock');
SoundCloudApi.renderTracks();