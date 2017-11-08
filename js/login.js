$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm())
      $('#loginForm').submit();
  });
  $('#clearBtn').click(function() {
    document.getElementById("loginForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function validateForm() {
    return true;
  }
});