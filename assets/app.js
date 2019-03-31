// create topics variable containing our string of topics
var listOfSports = ["football", "baseball", "basketball", "soccer", "hockey", "lacrosse", "swimming", "golf", "racing", "weightlifting", "cheerleading", "skateboarding", "skiing"];

// display the topics on the screen

// Function for displaying movie data
function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#button-holder").empty();

    // Looping through the array of sports
    for (var i = 0; i < listOfSports.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var newButton = $("<button>");
      // Adding a class
      newButton.addClass("sport");
      // Adding a data-attribute with a value of the movie at index i
      newButton.attr("data-name", listOfSports[i]);
      // Providing the button's text with a value of the movie at index i
      newButton.text(listOfSports[i]);
      // Adding the button to the HTML
      $("#button-holder").append(newButton);
    }
  }

renderButtons();

$(".sport").on("click", function() {
    var x = $(this).data("name");
    console.log(x)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=qz9Pt0PRRE8zgJLxiLo8sxiIEZQox6Ro&limit=10";
    $.ajax({url:queryURL,method: "GET"})
    .done(function(response){
        console.log(response);
        for (var j=0; j <response.data.length; j++) {
            var sportDiv = $("<div>");
            var p = $("<h6>").text("Rating: " + response.data[j].rating);
            var sportImage = $("<img>"); 
            sportImage.attr("src",response.data[j].images.fixed_height.url);
            sportDiv.append(p);
            sportDiv.append(sportImage); 
            $("#gifs-go-here").prepend(sportDiv);
        }
    })
    })

// establish variables needed to create our AJAX call and to get something to return from the GIPHY API

// create IDs in the html so we can append the gifs called from the API to the page

// create a loop that appends a button to the page for each item in the variable

// when user clicks a button, the page should grab 10 static, non-animated gif images from the GIPHY API page and place them on the webpage

// create function to make GIF animate when user clicks on it, or to stop animation when user clicks on it again

// add form to page that takes the value from a user input and adds it into topics array. 

// create a function that takes the user's input and creates a button off of it.

// make the user's button append to the page after it is created

// make sure to clear out the div in the HTML prior to running each call back function