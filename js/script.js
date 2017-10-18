// Alert to notify user that email address in invalid/valid

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

var inputElement = document.querySelector('#email');

inputElement.addEventListener('keyup', function(e) {
  if(e.target.value === "") {
    return;
  }
  if(validateEmail(e.target.value)) {
    inputElement.style['border']=" solid green";
  }
  else {
        inputElement.style['border']="solid red";
  }
});

// Alert for Form Error Message

function myFunction() {
  alert("This feature has not been created yet. Please try back later.");
}
