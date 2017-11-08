$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm())
      $('#signUpForm').submit();
  });
  $('#clearBtn').click(function() {
    document.getElementById("signUpForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function validateForm() {
    return true;
  }
});