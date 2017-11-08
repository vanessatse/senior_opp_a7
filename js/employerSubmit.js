$(document).ready(function() {
  $('#submitBtn').click(function() {
    if (validateForm()) {
      alert("Your listing has been submitted and is pending review.\nYou will receive an email once your listing is posted.");
      window.location.href="index.html";
    }
  });
  $('#clearBtn').click(function() {
    document.getElementById("listingForm").reset();
  });
  $('#homeBtn').click(function() {
   location.href = "index.html";
  });

  function validateForm() {
    var org = $("#listingOrg").val();
    var title = $("#listingTitle").val();
    var info = $("#listingInfo").val();
    return true;
  }

  function isValidEmail() {
    var email = $("#listingEmail").val();
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

  function isValidOrg() {
    var org = $("#listingOrg").val();
  }
});