var shopCol = Tidy.Model.extend({
	'collectionFn' : [
		{
			startIso : function(){
				var $container = $('#movieCanvas');
				// init
					$container.isotope({
					  // options
					  itemSelector: '.movie-tile-container'
					  ,layoutMode: 'fitRows'
					  ,filter: '.vuduItem'

				});				
			}
			,shopify : {
				curUrl : 0				
				,addParam : function(paramName, paramValue){
					 var url = window.location.href;
					    if (url.indexOf(paramName + "=") >= 0)
					    {
					        var prefix = url.substring(0, url.indexOf(paramName));
					        var suffix = url.substring(url.indexOf(paramName));
					        suffix = suffix.substring(suffix.indexOf("=") + 1);
					        suffix = (suffix.indexOf("&") >= 0) ? suffix.substring(suffix.indexOf("&")) : "";
					        url = prefix + paramName + "=" + paramValue + suffix;
					    }
					    else
					    {
					    if (url.indexOf("?") < 0)
					        url += "?" + paramName + "=" + paramValue;
					    else
					        url += "&" + paramName + "=" + paramValue;
					    }	

				    this.curUrl = url;				
				}
				,goSort : function(){
					window.location = this.curUrl;
				}

			}
		}
	]
});



//shortcut
var colFn	=	app.Model['collectionFn'];

//JQUERY
$(document).ready(function(){

	
	
	$('#sort-by-select').on('change', function(){

		colFn.shopify.addParam('sort_by',$(this).val());
		colFn.shopify.goSort();
	});

});