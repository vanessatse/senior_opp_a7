$(document).ready(function() {
  var email = localStorage.getItem('userEmail');
  if (email) {
    $(".loggedIn").show();
    $(".loggedOut").hide();
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