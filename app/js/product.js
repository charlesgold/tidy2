
	
	var uvProduct =	Tidy.Model.extend({			
		'productFunctions': [
						{
							movieWidth: 0
							,movieHeight: 0
							,movies: function(destId, padding) {									
									var width	= $('#'+destId).width();
									//var width 	= 	window.screen.width;
									var ratio	=	1.778;
									
									this.movieWidth	=	width-padding;
									this.movieHeight	=	width / ratio;
									
									this.generateIframe(destId);
								}
							,generateIframe: function(parentId){
								
								var currentSrc	=	$('#'+parentId + ' iframe').attr('src');
								var width			=	this.movieWidth;
								var height			=	this.movieHeight;
								var widthStr		=	'&width='+this.movieWidth;
								
								$('#'+parentId + ' iframe').attr('src', currentSrc+widthStr);
								$('#'+parentId + ' iframe').attr('width', width);
								$('#'+parentId + ' iframe').attr('height', height);								
							}								
						}

			]			

	});	
	
	
	
	//When APP loads
	//console.log(app.Model['productFunctions'].movies('product-preview',30));
	//console.log(app.Model['productFunctions'].movieWidth);
	var productFn	=	app.Model['productFunctions'];
	$(document).ready(function(){
		productFn.movies('product-preview',30);
	});
	//lazy for now, but on resize
	$(window).resize(function(){
			productFn.movies('product-preview',30);
	});
	
