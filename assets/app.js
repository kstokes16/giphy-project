// list of topics
var listOfSports = ["football", "baseball", "basketball", "soccer", "hockey", "lacrosse", "swimming", "golf", "racing"];

// Function for displaying sports buttons
function showButtons() {

    $("#button-holder").empty();

    // Looping through the array of sports
    for (var i = 0; i < listOfSports.length; i++) {

      // Then dynamicaly generating buttons for each sport
      var newButton = $("<button>");
      // Adding a class
      newButton.addClass("sport");
      // Adding a data-attribute with a value of the sport at index [i]
      newButton.attr("data-name", listOfSports[i]);
      // Providing the button's text with a value of the movie at index [i]
      newButton.text(listOfSports[i]);
      // Adding the button to the HTML
      $("#button-holder").append(newButton);
    }
  }
  showButtons();
  // end of show buttons function

      // adds a sport when you click the submit button
      $("#add-a-sport").on("click", function() {
        event.preventDefault();
        // This line will grab the text from the input box
        var sport = $("#new-sport-input").val().trim();
        // The sport the user entered is then added to our array
        listOfSports.push(sport);
        console.log("Inside add sport");
       // listOfSports.addClass("sport");
        // calling showButtons which updates the list in our array
        showButtons();
      });

// event listener to add gifs to page, based on button you click
$(document).on("click",".sport", function(){
//$(".sport").on("click", function() {
  console.log("inside gif click");
    // make sure to clear out the div in the HTML prior to running each call back function
    $("#gifs-go-here").empty();
    var x = $(this).data("name");
    console.log(x)

// when user clicks a button, the page should grab 10 static, non-animated gif images from the GIPHY API page and place them on the webpage

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=qz9Pt0PRRE8zgJLxiLo8sxiIEZQox6Ro&limit=10";
    $.ajax({url:queryURL, method: "GET"})
    .then(function(response){
        console.log(response);

      // create a loop that appends a button to the page for each item in the variable  
        for (var j=0; j <response.data.length; j++) {
            var sportDiv = $("<div>");
            sportDiv.addClass("col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6");
            var p = $("<h5>").html("Rating: " + response.data[j].rating + "<br>" + "Title: " + response.data[j].title); // + "<br>" + "Source: " + response.data[j].source);
            var sportImage = $("<img>"); 
            sportImage.addClass("giphy-sport-image", "img-responsive");
			      sportImage.attr("state", "still");
			      sportImage.attr("still-data", response.data[j].images.fixed_height_still.url);
			      sportImage.attr("animated-data", response.data[j].images.fixed_height.url);
            sportImage.attr("src",response.data[j].images.fixed_height_still.url);
            sportDiv.append(p);
            sportDiv.append(sportImage); 
            $("#gifs-go-here").append(sportDiv);
        }
      });  

 });
        // create function to make GIF animate when user clicks on it, or to stop animation when user clicks on it again

        $(document).on("click",".giphy-sport-image",function(){
        //$(".giphy-sport-image").on("click", function(){
           // console.log(this);
            if($(this).attr("state") === "still") {
                $(this).attr("state", "animated");
                $(this).attr("src", $(this).attr("animated-data"));
            }
            else {
                $(this).attr("state", "still");
                $(this).attr("src", $(this).attr("still-data"));
            }})
   
   