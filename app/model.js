var userInfo = {};

var recipe = {};



export function changePage(pageID, callback) {
  if (pageID == "home") {
    $.get(`pages/${pageID}.html`, function(data) {
      $("#app").html(data)
    }
  )}
}

// getters and setters
export function setUserInfo(userObj) {
  userInfo = userObj;
  console.log(userInfo);
}

