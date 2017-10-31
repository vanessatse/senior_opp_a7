
window.addEventListener('load', function() {validateForm()}, false);
//var submitBtn = document.getElementById('submitBtn');
//submitBtn.onclick = function(){validateInputs()};

function validateForm() {
  var form = document.getElementById('form');
  form.addEventListener('submit', function(event) {
    if (!(form.checkValidity())) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');
  }, false);
}
/**
function validateInputs() {
  if (!(isValidZip() && isValidDist()))
    alert('Invalid inputs!');
}
**/

function isValidZip() {
  var zip = document.getElementById('zip');
  if (isNaN(zip.value) || zip.length != 5)
    return false;
  else return true;
}

function isValidDist() {
  var dist = document.getElementById('dist');
  if (isNaN(dist.value))
    return false;
  else return true;
}