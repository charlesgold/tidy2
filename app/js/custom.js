/*
 * Custom
 */

$(document).ready(function() {

  $("#test-carousel").owlCarousel({
  	
    loop: true 
    ,lazyLoad:true
    ,margin: 5
    ,dots: false
    ,mergeFit: true
    ,center: false
	,nav: true
	,autoHeight: true
    //,slideBy: 4
	,navText: [
		"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
		"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
	]           
    ,responsive:{
    	0: {
    		items: 3
    		//,margin: 0
    		,dots: true
    		,nav: true
    	}
      	,320: {
          	items: 2
        }
    	,480: {
    		items: 4
    		
    	}
    	,768: {
    		items: 6
    	}
    	,1024: {
    		items: 8
    	}
    	,1280: {
    		items: 8
    	}
    }
    
  });
  
  
  /*
   * onsale Carousel
   */
  $("#sale-carousel").owlCarousel({
  	
    loop: true    
    ,lazyLoad:true
    ,margin: 5
    ,dots: false
    ,mergeFit: true
    ,center: false
	,nav: true
    ,autoHeight: true
	,navText: [
		"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
		"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
	]           
    ,responsive:{
    	0: {
    		items:3
    		//,margin: 0
    		,dots: true
    		,nav: true
    	}
    	,480: {
    		items: 4
    		
    	}
    	,768: {
    		items: 6
    	}
    	,1024: {
    		items: 8
    	}
      

    }
    
  });
  
  /*
   * coming soon
   */
	$("#coming-carousel").owlCarousel({
  	
	    loop: true    
	    ,lazyLoad:true
	    ,margin: 5
	    ,dots: false
	    ,mergeFit: true
	    ,center: false
		,nav: true
      	,autoHeight: true
		,navText: [
			"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
			"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
		]           
	    ,responsive:{
	    	0: {
	    		items:3
	    		//,margin: 0
	    		,dots: true
	    		,nav: true
	    	}
	    	,480: {
	    		items: 4
	    		
	    	}
	    	,768: {
	    		items: 6
	    	}
	    	,1024: {
	    		items: 8	
	    	}
	    	,1280: {
	    		items: 8 
	    	}
	    } 
    
  });  
  
  
/*
   * popular
   */
	$("#popular-carousel").owlCarousel({
  	
	    loop: true    
	    ,lazyLoad:true
	    ,margin: 5
	    ,dots: false
	    ,mergeFit: true
	    ,center: false
		,nav: true
      ,autoplay: false
      ,autoHeight: true
		,navText: [
			"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
			"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
		]           
	    ,responsive:{
	    	0: {
	    		items:3
	    		//,margin: 0
	    		,dots: true
	    		,nav: true
	    	}
	    	,480: {
	    		items: 4
	    		
	    	}
	    	,768: {
	    		items: 6
	    	}
	    	,1024: {
	    		items: 8	
	    	}
	    	,1280: {
	    		items: 8
	    	}
	    }
    
  });
  
  
/* product carousel */
  	$(".product-carousel").owlCarousel({
  	
	    loop: true    
	    ,lazyLoad:true
	    ,margin: 5
	    ,dots: false
	    ,mergeFit: true
	    ,center: false
		,nav: true
      ,autoplay: false
      ,autoHeight: true
		,navText: [
			"<i class='fa fa-chevron-left fa-3x fa-middle'></i>",
			"<i class='fa fa-chevron-right fa-3x fa-middle'></i>"
		]           
	    ,responsive:{
	    	0: {
	    		items:3
	    		//,margin: 0
	    		,dots: true
	    		,nav: true
	    	}
	    	,480: {
	    		items: 4
	    		
	    	}
	    	,768: {
	    		items: 6
	    	}
	    	,1024: {
	    		items: 8	
	    	}
	    	,1280: {
	    		items: 8
	    	}
	    }
    
  });
  

});
