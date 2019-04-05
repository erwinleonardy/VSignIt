$(document).ready(function(){

	//Attaching event handler to .dropdown selector.
	$('.dropdown').on({

		//fires after dropdown is shown instance method is called (if you click anywhere else)
		"shown.bs.dropdown": function() { this.close= false; },

		//when dropdown is clicked 
		"click": function() { this.close= true; },

		//when close event is triggered
		"hide.bs.dropdown":  function() { return this.close; }
	});
	
	$("#portfolio-contant-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 400,      
	    singleItem:true,
	    autoPlay: 10000,
	});


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});


	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});




