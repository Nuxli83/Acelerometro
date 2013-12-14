//actions sin esta instancia las transiciones no funcionaran
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

$(function(){
	document.addEventListener("deviceready",function(){
		$('#brujula ul.individual li').tap(function(){
			var watchBR = null;	
			if($(this).index() = 0){
				watchBR =  navigator.compass.watchHeading(function(h){
					$('#brujula .scroll h2').text(
					h.magneticHeading);
					
					},function(err){
						alert(err.code);
						},{frequency: 500});
				
			}
			else
			{
				if(watchBR)
				{
					navigator.compass.clearWatch(watchBR)
					watchBR = null;
				}
				$('#brujula .scroll h2').text('Detenido');
				
				
			}


			
			});
	},false);
});