var userInfo = {};

var recipes = [
  {
    rImage: "recipe-pizza.jpg",
    rName: "Supreme Pizza",
    rDescription: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
    rTime: "1hr 24min",
    rServingSize: "4 servings",
    ingredients: [
      "1/4 batch pizza dough",
      "2 tablespoons Last-Minute Pizza Sauce",
      "10 slices pepperoni",
      "1 cup cooked and crumbled Italian sausage",
      "2 large mushrooms, sliced",
      "1/4 bell pepper, sliced",
      "1 tablespoon sliced black olives",
      "1 cup shredded mozzarella cheese",
    ],
    instructions: [
      "1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.",
      "2. Flatten dough into a thin round and place on the pizza pan.",
      "3. Spread pizza sauce over the dough.",
      "4. Layer the toppings over the dough in the order listed .",
      "5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    ],
    rId: 0,
  }
];

var currRecipe = {

    rImage: "recipe-pizza.jpg",
    rName: "Supreme Pizza",
    rDescription: "Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!",
    rTime: "1hr 24min",
    rServingSize: "4 servings",
    ingredients: [
      "1/4 batch pizza dough",
      "2 tablespoons Last-Minute Pizza Sauce",
      "10 slices pepperoni",
      "1 cup cooked and crumbled Italian sausage",
      "2 large mushrooms, sliced",
      "1/4 bell pepper, sliced",
      "1 tablespoon sliced black olives",
      "1 cup shredded mozzarella cheese",
    ],
    instructions: [
      "1. Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.",
      "2. Flatten dough into a thin round and place on the pizza pan.",
      "3. Spread pizza sauce over the dough.",
      "4. Layer the toppings over the dough in the order listed .",
      "5. Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.",
    ],
    rId: 0,
  }




export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
     
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "editRecipe") {
    $.get(`pages/${pageID}.html`, function (data) {
     
      $("#app").html(data);

        $.each(currRecipe, (idx, recipe) => {
          $(".recipe-section-ing").append(`<input type="text" id="${idx}" placeholder="${recipe.ingredients}"/>`)
        });

        $.each(currRecipe, (idx, recipe) => {
          $(".recipe-section-ins").append(`<input type="text" id="${idx}" placeholder="${recipe.instructions}"/>`)
        })


        $.each(currRecipe, (idx, recipe) => {
          $(".recipe-section").append(`
          <img src="../images/${recipe.rImage}" alt="${book.bookTitle}" />
  
            <input type="text" id="rName" name="rName" placeholder="${recipe.rName}">

            <input type="text" id="rDesc" name="rDesc" placeholder="${recipe.rDescription}">

            <input type="text" id="rTT" name="rTT" placeholder="${recipe.rTime}">

            <input type="text" id="rSS" name="rSS" placeholder="${recipe.rServingSize}">
          `)
        })

     

      callback();
    });
  } else if (pageID == "viewRecipe"){
    $.get(`pages/${pageID}.html`, function (data) {
      
      $("#app").html(data);
      
    });
  
  } else if (pageID == "yourRecipes"){
    $.get(`pages/${pageID}.html`, function (data) {
      
      $("#app").html(data);
      //this is not styled corr
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

