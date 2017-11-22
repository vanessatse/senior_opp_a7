$(document).ready(function() {
  var loggedIn = localStorage.getItem('userEmail');
  if (loggedIn) {
    $(".loggedIn").show();
    $(".loggedOut").hide();
    var firstName = localStorage.getItem('userFirst');
    if (!firstName)
      firstName = "User";
    $("#helloUser").text("Hello, " + firstName);
  }
  else {
    $(".loggedIn").hide();
    $(".loggedOut").show();
  }

  $('#logoutBtn').click(function() {
    localStorage.clear();
    location.reload(); 
  });
});