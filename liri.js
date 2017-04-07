//Require the request RPM package 

var request = require("request");

//Require the spotify library 

var spotify = require("spotify");

//require the twitter library

var Twitter = require("twitter");

//requiring fs 

var fs = require("fs");



//Use Process.argv to see if the user entered "movie-this" as the first parameter


if(process.argv[2] === "movie-this")

  {

    // console.log("The user entered movie-this");
  


// Use Process.argv to create a variable with the name of the movie entered 


var processArgv = process.argv[3];

// console.log("the movie title is" + movieTitle);

var movieTitle;

if (processArgv === undefined) {


movieTitle = "Mr. Nobody";

// console.log("processArgv is undefined " );

}


else {

   movieTitle = processArgv;
}



//create a variable for the query url 


var queryURL = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json";

// http://www.omdbapi.com/?t=Closer&y=plot=short&r=json

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
    console.log("*Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    // console.log("*Rotten Tomatoes URL: " + JSON.parse(body).);
    

  }


});

}



// //check to see if user entered spotify-this-song


else if(process.argv[2] === "spotify-this-song")


        if (process.argv[3] === undefined ) {


            var defaultSongTitle = "The Sign";

            songFunction(defaultSongTitle);


          }




        else {

          var enteredSongTitle = process.argv[3];

          songFunction(enteredSongTitle);


            }

  



else if(process.argv[2] === "my-tweets")


{   

  //Grabbing the bucket of values in keys.js

  var bucketofValues = require("./keys.js");


  var keys = bucketofValues.twitterKeys;


    var client = new Twitter(keys);
 
var params = {screen_name: 'angie_g_san'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0].text);
    // console.log(response);
    // console.log(response.text);
    // console.log(tweets.text)
  }
});

// https://apps.twitter.com/app/13629185/keys

// https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=angie_g_san 

    // consumer_key: 'ozsvGBQZKayjjwXjbAHj6CIA9',
  //    consumer_secret: 'mm8PoWTH0nbA67py7QyasvePGFEVroMjA0uhrOqwVHD2ZlWieu',
  //    access_token_key: '849426726371414021-ERnGAH2HA3izxZRGGG8TKGXYEDktU6E',
  //    access_token_secret: 'iUQcvR3f9R8Snlnc4CRqOjzRhqkyqi5hrb6kPcdBVZEyF'


}



else if(process.argv[2] === "do-what-it-says")

{
     

     fs.readFile("random.txt", "utf8", function(error, data){

     
      console.log(data);
     });


}





// var songTitleish = "beautiful day";

// songFunction(songTitleish);


function songFunction (dataish){


var songTitleII = dataish;
 

 spotify.search({ type:"track", query:songTitleII, limit: 1}, function(err, data){

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

 //end of songFunction 

}