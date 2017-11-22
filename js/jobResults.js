$(document).ready(function() {
  $('#saveJob1Btn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());  
      if (!savedItem) {
          localStorage.setItem("title" + i.toString(), "Welcome Desk Attendant");
          localStorage.setItem("img" + i.toString(), "images/solid-silver-gray-fabric_medium.jpg");
          localStorage.setItem("more" + i.toString(), "list/job1.html");
          localStorage.setItem("cont" + i.toString(), "cont/job1.html");
          $('#saveJob1Btn').prop('disabled', true);
          $('#saveJob1Btn').attr('disabled', true);
          break;
      }
    }
  });

  $('#saveJob2Btn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());
      if (!savedItem) {
        localStorage.setItem("title" + i.toString(), "Lucky Mart Cashier");
        localStorage.setItem("img" + i.toString(), "images/solid-silver-gray-fabric_medium.jpg");
        localStorage.setItem("more" + i.toString(), "list/job2.html");
        localStorage.setItem("cont" + i.toString(), "cont/job2.html");
        $('#saveJob2Btn').prop('disabled', true);
        break;
      }
    }
  });

  $('#saveJob3Btn').click(function() {
    for (var i = 1; i < 6; i++) {
      var savedItem = localStorage.getItem("title" + i.toString());
      if (!savedItem) {
        localStorage.setItem("title" + i.toString(), "Professional Pet Sitter/Dog walker");
        localStorage.setItem("img" + i.toString(), "images/solid-silver-gray-fabric_medium.jpg");
        localStorage.setItem("more" + i.toString(), "list/job3.html");
        localStorage.setItem("cont" + i.toString(), "cont/job3.html");
        $('#saveJob3Btn').prop('disabled', true);
        break;
      }
    }
  });

});