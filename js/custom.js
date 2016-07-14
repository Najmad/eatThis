$(document).ready( function(){

	var ingredient1 
	var ingredient2 
	var unwantedIngredient


	$("#searchBtn").click(function(){
		 ingredient1 = $("#ingredient1").val()
		 ingredient2 = $("#ingredient2").val()
		 unwantedIngredient = $("#unwantedIngredient").val()
		 console.log(ingredient1)
		 console.log(ingredient2)
		 console.log(unwantedIngredient)

		 $.get("http://api.yummly.com/v1/api/recipes?_app_id=76673592&_app_key=17ee3cd3288f06af85bc442278910238&q=&excludedIngredient[]=unwantedIngredient&requirePictures=true&maxResult=5&start=5&q="+ingredient1+"+"+ingredient2).done(function(data){
		 //$.get("http://api.yummly.com/v1/api/recipes?_app_id=f4eb0c21&_app_key=3ab19ef9678abfecad9dedeb7070c60b=&excludedIngredient[]"+unwantedIngredient%20).done(function(data){
				console.log(data)
				console.log(data.matches[0].id)

				for (var i = 0; i < data.matches.length; i++) {
					data.matches[i]
					$("#results").html(data.matches[i].id)
				}

				
			 });

			
		})
	})

	
      

