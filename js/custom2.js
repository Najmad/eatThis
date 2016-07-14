<!-- call with "ingredient1" --> 
getRecipesByRestrictions: function (unwantedIngredient) {
        console.log(unwantedIngredient);
        console.log(data.matches[0].id);
        return $http.jsonp("http://api.yummly.com/v1/api/recipes?callback=JSON_CALLBACK" , {
          params: {
            "_app_id": f4eb0c21,
            "_app_key": 3ab19ef9678abfecad9dedeb7070c60b,
            "q": unwantedIngredient,
            "maxResult": 10,
            "unwantedIngredient[]": ["unwantedIngredient"],
            "requirePictures": true
          }
        }).then(function (response) {
          console.log(response.data);
          return response.data.matches;
        });
      },
          
<!-- call with "excludedIngredient -->     
getRecipesByRestrictions: function (unwantedIngredient) {
        console.log(unwantedIngredient);
        console.log(ingredient1);
        return $http.jsonp("http://api.yummly.com/v1/api/recipes?callback=JSON_CALLBACK" , {
          params: {
            "_app_id": id,
            "_app_key": key,
            "q": ingredient1,
            "maxResult": 6,
     
             "unwantedIngredient[]": ["unwantedIngredient"],
            "requirePictures": true
          }
        }).then(function ("#results") {
          console.log(response.data);
          return response.data.matches;
        });
      },