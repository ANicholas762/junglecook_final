import * as MODEL from "./model.js";
// import * as MODEL from "./model.js";
let signedIn = false;

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  // console.log(hashTag + " " + pageID);
  if (pageID == "" || pageID == "home") {
    MODEL.changePage(pageID, initSubmitListener);
  } else if (pageID == "books") {
    MODEL.changePage(pageID, placeholder);
  } else {
    MODEL.changePage(pageID);
  }
}

function logOut() {
  $(".logOut").on("click", function (e) {
    console.log("logout");

    alert("Thank you for signing out");
    signedIn = false;

    if (signedIn == false) {
      MODEL.changePage("account", initSubmitListener);
      console.log("L");
    }
  });
}

function logIn() {
  $(".login").on("click", function (e) {
    console.log("submit");

    let email = $(".email").val();
    let password = $(".password").val();

    $(".email").val("");
    $(".password").val("");

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
  $(".submit").on("click", function (e) {
    console.log("submit");
    //   trace("app.js", "submit");

    let fn = $(".fName").val();
    let ln = $(".lName").val();
    let email = $(".signUpEmail").val();
    let password = $(".signUpPassword").val();

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

      $(".fName").val("");
      $(".lName").val("");
      $(".signUpEmail").val("");
      $(".signUpPassword").val("");
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
  initSubmitListener();
  logIn();
  logOut();
  initURLListener();
});
