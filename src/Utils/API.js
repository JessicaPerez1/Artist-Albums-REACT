const searchBandsInTown = async () => {
  try {
    const queryURL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "?app_id=codingbootcamp";
  } catch (error) {
    console.error(error);
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
  }
    fetch("https://spotifystefan-skliarovv1.p.rapidapi.com/getAlbums", {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "Spotifystefan-skliarovV1.p.rapidapi.com",
            "x-rapidapi-key": "SIGN-UP-FOR-KEY",
            "content-type": "application/x-www-form-urlencoded"
        },
        "body": {}
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });



  const response = await fetch(queryURL, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    console.log(response);
    // Constructing HTML containing the artist information
    var artistName = $("<h1>").text(response.name);
    var artistURL = $("<a>").attr("href", response.url).append(artistName);
    var artistImage = $("<img>").attr("src", response.thumb_url);
    var trackerCount = $("<h2>").text(
      response.tracker_count + " fans tracking this artist"
    );
    var upcomingEvents = $("<h2>").text(
      response.upcoming_event_count + " upcoming events"
    );
    var goToArtist = $("<a>").attr("href", response.url).text("See Tour Dates");
    // Empty the contents of the artist-div, append the new artist content
    $("#artist-div").empty();
    $("#artist-div").append(
      artistURL,
      artistImage,
      trackerCount,
      upcomingEvents,
      goToArtist
    );
  });
};
