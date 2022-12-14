import * as MODEL from "./model.js";
// import * as MODEL from "./model.js";
let signedIn = false;

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, placeholder);
  } else {
    MODEL.changePage(pageID);
  }
}

function logOut() {
  // $(".logOut").on("click", function (e) {
  //   console.log("logout");

  //   alert("Thank you for signing out");
  //   signedIn = false;

  //   if (signedIn == false) {
  //     MODEL.changePage("account", initSubmitListener);
  //     console.log("L");
  //   }
  // });
}

function logIn() {
  $("#sbtn").on("click", function (e) {
    console.log("submit");

    $("nav").append(`<a href="#yourRecipes">Your recipes</a>`);
    $("nav").append(`<a href="#yourRecipes">Your recipes</a>`);

    let email = $(".lemail").val();
    let password = $(".lpword").val();

    $(".lemail").val("");
    $(".lpword").val("");

    if (email == "") {
      alert("enter data");
    } else if (password == "") {
      alert("enter data");
    }
    alert("Thank you for signing in");
    signedIn = true;

    if (signedIn == true) {
      MODEL.changePage("home", initSubmitListener);
    }
  });
}

function signUp() {
  $(".in_boxes").on("click", function (e) {
    console.log("submit");

    let fn = $(".fn").val();
    let ln = $(".ln").val();
    let email = $(".ea").val();
    let password = $(".pw").val();

    // make the user object
    if (fn == "") {
      alert("enter data");
    } else if (ln == "") {
      alert("enter data");
    } else if (email == "") {
      alert("enter data");
    } else if (password == "") {
      alert("enter data");
    } else {
      let userObj = {
        firstName: fn,
        lastName: ln,
        email: email,
        password: password,
      };

      // send that object
      MODEL.setUserInfo(userObj);

      $(".fn").val("");
      $(".la").val("");
      $(".ea").val("");
      $(".pw").val("");
      signedIn = true;
      alert("Thank you for signing up");
    }
    console.log(`${fn} ${ln} ${email} ${password}`);
    if (signedIn == true) {
      MODEL.changePage("home", initSubmitListener);
      console.log(signedIn);
    }
  });
}

let ingredCnt = 3;
let instructionCnt = 3;

function deleteRecipe() {
  
}

function addBtn() {
  

  $(".addBtnIng").on("click",(e) => {
    
    $(".recipe-section-ing").append(`<input type="text" id="ingred ${ingredCnt}" placeholder="Ingredient #${ingredCnt + 1}" />`);



    ingredCnt++;

    

  });

  $(".addBtnIns").on("click",(e) => {
    
    $(".recipe-section-ins").append(`<input type="text" id="ingred ${instructionCnt}" placeholder="Ingredient #${instructionCnt + 1}" />`);



    instructionCnt++;

    

  });

  $("#final-submit").on("click", (e) => {

    
    MODEL.recipes.push({rImage: $(".recipe-section #rImage").value});
    MODEL.recipes.push({rName: $(".recipe-section #rName").value});
    MODEL.recipes.push({rDescription: $(".recipe-section #rDesc").value});
    MODEL.recipes.push({rTime: $(".recipe-section #rTT").value});
    MODEL.recipes.push({rServingSize: $(".recipe-section #rSS").value});

    e.preventDefault();

    $(".recipe-section-ing input").each((idx, step) => {
      
      MODEL.recipes.steps.push({step: step.value});

      
    })

    $(".recipe-section-ing input").each((idx, ingredient) => {
      

      MODEL.recipes.ingredients.push({ingredients: ingredient.value});
    })
  })
}


function initSubmitListener() {
  logIn();
  signUp();
  logOut();

}

// function test() {
//   $(".test").on("click", () => {
//     console.log("test");
//   });
// }




function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {

  addBtn();
  initSubmitListener();
  logIn();
  logOut();
  initURLListener();
});
