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

		 $.get("http://api.yummly.com/v1/api/recipes?_app_id=f4eb0c21&_app_key=3ab19ef9678abfecad9dedeb7070c60b&q="+ingredient1+"+"+ingredient2).done(function(data){
			console.log(data)
			console.log(data.matches[0].id)

		$("#results").html(data.matches[0].id)
		})
	})

	
      
}); 
