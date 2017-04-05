//Require the request RPM package 

var request = require("request");

//Require the spotify library 

var spotify = require("spotify");



//Use Process.argv to see if the user entered "movie-this" as the first parameter


if(process.argv[2] === "movie-this")

	{

		// console.log("The user entered movie-this");
	


// Use Process.argv to create a variable with the name of the movie entered 


var movieTitle = process.argv[3];

// console.log("the movie title is" + movieTitle);


//create a variable for the query url 


var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json";


// console.log("The url is " + queryURL)

//run a request to OMDB with the title of the movie 
//pass a function that passes three parameters - error, response and body
//body is the object that you get back


request(queryURL, function(error, response, body) {

	if (!error && response.statusCode === 200)  {


//If there is no error parse the body and console log out the movie rating 



		console.log("*Title of the movie: " + JSON.parse(body).Title);
		console.log("*Year the movie came out: " + JSON.parse(body).Year);
		console.log("*IDMB Rating of the movie: " + JSON.parse(body).imdbRating);
		console.log("*Country where the movie was produced: " + JSON.parse(body).Country);
		console.log("*Language of the movie: " + JSON.parse(body).Language);
		console.log("*Plot of the movie: " + JSON.parse(body).Plot);
		console.log("*Actors in the movie: " + JSON.parse(body).Actors);
		// console.log("*Rotten Tomatoes Rating: " + JSON.parse(body).Ratings.);
		// console.log("*Rotten Tomatoes URL: " + JSON.parse(body).Title);
		

	}


});

}



//check to see if user entered spotify-this-song

else if(process.argv[2] === "spotify-this-song")



	{


		var songTitle = process.argv[3];

		console.log("the song title is " + songTitle);

   			// console.log(spotify);

         spotify.search({ type:"track", query:songTitle, limit: 1}, function(err, data){

         	if (err) {

         				console.log("error occured: " + err);

         				return 

         			}

         	else {

         			console.log("Artist: " + data.tracks.items[0].artists[0].name);
         			// console.log(data.tracks.href);
         			console.log("The song's name is: " + data.tracks.items[0].name);
         			console.log("Preview link: " + data.tracks.items[0].preview_url);
         			console.log("Album: "+ data.tracks.items[0].album.name)

         		}

         	
         });


	}



