$(document).ready(function(){
	$("#weather").submit(function(){
		var place = $("#place").val();
		$.get("http://api.openweathermap.org/data/2.5/weather?q="+place+"&&appid=******",function(res){
			$(".place").html("<h2>"+place+"</h2>");
			$(".temp").html("<h3>Temperature:" + Math.floor((((res.main.temp-273)*(9/5))+32))+"</h3>")
		}, "json");
		return false;
	})
})