$(document).ready(function(){
//Control the top carousel
	$("#hero-carousel").owlCarousel({
	  	
	    loop: true 
	    ,autoplay: true
	    ,autoplayHoverPause: true
	    ,lazyLoad:true
	    ,margin: 5	    
	    ,mergeFit: true
	    ,center: false
		,nav: false
		,video: true

	    //,slideBy: 4
		,navText: [
			"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
			"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
		]           
	    ,responsive:{
	    	0: {
	    		items: 1
	    	}
	    }
    
});

});