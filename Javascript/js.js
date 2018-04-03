var gifChoices = ["jedi","obama","cars","ronaldo","ibrahimovic","cancun","scenery",
				  "barcelona","tv","houses","snow","mountains","harden","basketball",
				  "mj","kobe","sith","pakistan","messi","salah",];

console.log(gifChoices);


function createButtons () {

	$("#buttonsMan").empty();



	for (i=0; i<gifChoices.length; i++) {

		var buttonCreator = $('<button>' + gifChoices[i] + '</button>');
		buttonCreator.addClass("buttonCreatorClass");
		buttonCreator.attr("data-array-for-gif", gifChoices[i]);
		buttonCreator.text(gifChoices[i]);
		$("#buttonsMan").append(buttonCreator);

	}


}

createButtons();

$(".inputButton").on("click", function(event) {
  event.preventDefault();

  var userInputGif = $("#addtheGiff").val().trim();

  console.log(userInputGif);

  gifChoices.push(userInputGif);

  createButtons();

  });

function displayGIFS() {

		
		$("#theGifsMan").empty();


        var gifSearch = $(this).attr("data-array-for-gif");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=gbymoeOW8iGtf8EK1utWS1lEjBkvpUnv&limit=10";
        console.log(queryURL);
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

        	var dataWithArray = response.data;

        	
        	console.log(dataWithArray[0].images.fixed_width.url);

        	for (i=0; i < dataWithArray.length; i++) {

				var divToContain = $('<div>'); 
				divToContain.addClass("theDivOfContainer");     		

        		var ratingsMan = $('<div>');
				ratingsMan.addClass("ratingsManClass");
				ratingsMan.attr("data-ratings-man", dataWithArray[i].rating);
				ratingsMan.text("Rating: " + dataWithArray[i].rating);
				$(divToContain).append(ratingsMan);
				
        		
        		var gifsHomie = $('<img>');
				gifsHomie.addClass("gifsHomiee");
				gifsHomie.attr("src", dataWithArray[i].images.fixed_height_still.url);
				$(divToContain).append(gifsHomie);

				$("#theGifsMan").append(divToContain);

				
        		
        	}

        	// var testImageURL = response.images.fixed_width.url;

        	

        	

        	

        	// console.log(testImageURL);
          
         
        });
      }

      function animate() {

      	console.log("hello");
      	console.log(($(this).attr("src")));

      	console.log(($(this)));

      	



      }






  $(document).on("click", ".buttonCreatorClass", displayGIFS);
  $(document).on("click", ".gifsHomiee", animate);








