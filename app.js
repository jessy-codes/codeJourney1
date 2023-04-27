   
// paystack API javascript 
const paymentForm = document.getElementById('paymentForm');
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_305ec3eefb8dc2f324afb933330ac6c225afb39f', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.querySelector("#amount").value * 100,
    currency: 'GHS', 
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX END OF PAYSTACK APIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
 
 
   
   //  JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// password cnfirmation
function validate_password() {

  var pass = document.getElementById('pword').value;
  var confirm_pass = document.getElementById('cpword').value;
  if (pass != confirm_pass) {
    document.getElementById('wrong_pass_alert').style.color = 'red';
    document.getElementById('wrong_pass_alert').innerHTML
    = '☒ Confirm password please';
    document.getElementById('create').disabled = true;
    document.getElementById('create').style.opacity = (0.4);
  } else {
    document.getElementById('wrong_pass_alert').style.color = 'green';
    document.getElementById('wrong_pass_alert').innerHTML =
      '🗹 Password Matched';
    document.getElementById('create').disabled = false;
    document.getElementById('create').style.opacity = (1);
  }
}

function wrong_pass_alert() {
  if (document.getElementById('pword').value != "" &&
    document.getElementById('confirm_pass').value != "") {
    alert("Your response is submitted");
  } else {
    alert("Please fill all the fields");
  }
}

// XXXXXXXXXXXXXXXXXXXX End of password confirmation XXXXXXXXXXXXXXXXXXX
 

    



// input field change function for amount input field button onclick
function Mchange(){

  var txt = document.querySelector("#amount1").value;
  document.querySelector("#amount").value=txt;
  
}
function Mchange1(){

  var txt1 = document.querySelector("#amount2").value;
  document.querySelector("#amount").value=txt1;
  
}
function Mchange2(){

  var txt2 = document.querySelector("#amount3").value;
  document.querySelector("#amount").value=txt2;
  
}

   // HAmburger Menu
   function changeMenu(x) {
    x.classList.toggle("change");
}
// XXXXX HaM MenuXXXXXX
// Add or remove content on window resize at breakpoint sm>=576px

// toggle nav bar content on click of menu button
$("#nbtn").click(function(){
  $(".Socials, #obtn").toggle()
})
// XXXXXXXXXXXXXXXXXXXX End Of toggle nav bar content on click of menu button XXXXXXXXXXXXXXXXXXXxx

// Owl Carousel Trigger
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
})

// XXXXXXXXXXXXXXXXXXXXXXXXXXXx End of Owl Carousel Trigger XXXXXXXXXXXXXXXXXXXXX

//  Toggle navbar content on window resize
$(document).ready(function(){

$(window).resize(function(){
  if($(this).width() <= 576){
    $(".Socials").hide();
  }
  else if(
    $(this).width() > 576){
      $(".Socials").show();
    }
   
})

})
$(document).ready(function(){
  $(window).resize(function(){
    if($(this).width() <=380){
      $("#obtn").hide();
    }
    else (
        $("#obtn").show());
      
  })
})
// XXXXXXXXXXXXXXXXXXXXXXXXXX End of Toggle navbar content on window resize XXXXXXXXXXXXXXXXXXXXXXXXXX















































