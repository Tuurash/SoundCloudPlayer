//SOUNDCLOUD API QUERY

SC.initialize({
  client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// find all tracks with the genre 'punk' that have a tempo greater than 120 bpm.
SC.get('/tracks', {
  genres: 'punk', bpm: { from: 120 }
}).then(function(tracks) {
  console.log(tracks);
});