var userInfo = {};

var recipeList = [];



export function changePage(pageID, callback) {
  if (pageID == "") {
    $.get(`pages/home.html`, function (data) {
     
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "editRecipe") {
    $.get(`pages/${pageID}.html`, function (data) {
     
      $("#app").html(data);
     $("#editRecipe").append(`<div id="create-title">Hey, create recipe!</div>

     <div id="addRecipe-container">
 
         <div class="recipe-section">
 
             <input type="text" id="rImage" name="rImage" placeholder="Add Recipe Image">
 
             <input type="text" id="rName" name="rName" placeholder="Recipe Name">
 
             <input type="text" id="rDesc" name="rDesc" placeholder="Recipe Description">
 
             <input type="text" id="rTT" name="rTT" placeholder="Recipe Total Time">
 
             <input type="text" id="rSS" name="rSS" placeholder="Recipe Serving Size">
         </div>
 
         <div class="enter-section">
             <h3>Enter Ingredients</h3>
             <div class="recipe-section">
 
                 <input type="text" id="ingre0" placeholder="Ingredient #1"/>
                 <input type="text" id="ingre1" placeholder="Ingredient #2"/>
                 <input type="text" id="ingre2" placeholder="Ingredient #3"/>
      
 
                 <div class="addBtn">+</div>
 
             </div>
 
         </div>
 
         <div class="enter-section">
             <h3>Enter Ingredients</h3>
 
             <div class="recipe-section">
 
 
                 <input type="text" id="instruction0" placeholder="Instruction #1"/>
                 <input type="text" id="instruction1" placeholder="Instruction #2"/>
                 <input type="text" id="instuction2" placeholder="Instruction #3"/>
      
 
                 <div class="addBtn">+</div>
                 
             </div>
 
         </div>
 
         <button id="final-submit">
             Create Recipe
         </button>
 
     </div>
 `)

      callback();
    });
  } else if (pageID == "viewRecipe"){
    $.get(`pages/${pageID}.html`, function (data) {
      
      $("#app").html(data);
      
    });
  
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
     
      $("#app").html(data);
      
    });
  }
}

// getters and setters
export function setUserInfo(userObj) {
  userInfo = userObj;
  console.log(userInfo);
}

