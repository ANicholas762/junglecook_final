var userInfo = {};

var recipe = {};



export function changePage(pageID, callback) {
  if (pageID == "" || pageID == "home") {
    $.get(`pages/home.html`, function (data) {
     
      $("#app").html(data);
      callback();
    });
  } else if (pageID == "books") {
    $.get(`pages/${pageID}.html`, function (data) {
     
      $("#app").html(data);
     

      callback();
    });
  } else {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      
    });
  }
}

// getters and setters
export function setUserInfo(userObj) {
  userInfo = userObj;
  console.log(userInfo);
}

