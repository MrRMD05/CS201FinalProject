//JSON object that will be stored in localStorage
let booking = {
  "first_name" : "",
  "last_name": "",
  "email" : "",
  "start_date": "",
  "end_date": "",
  "from" : "",
  "destination" : "",
  "sleeper_cabin" : "",
  "normal_seating" : "",
  "food_preference" : ""
};

let bookingTemp = JSON.parse(localStorage.getItem("booking-data"));//assumption booking data will be stored as a string

if (!bookingTemp){
  console.log("booking data does not exist");
} else {
  console.log("booking data found");
  booking = bookingTemp;
}

$(document).ready(function(){

  $("#first-name").blur(function(){
    booking.first_name = $("#first-name").val();
  });
  $("#last-name").blur(function(){
    booking.last_name = $("#last-name").val();
  });
  $("#email").blur(function() {
    booking.email = $("#email").val();
  });
  $("#from").blur(function() {
    booking.from = $("#from option:selected").val();
  });

  $("#start-date").datepicker();
  $("#end-date").datepicker().on("change", function(){
    booking.start_date = $("#start-date").val();
    booking.end_date = $("#end-date").val();
    localStorage.setItem("booking-data", JSON.stringify(booking));
    console.log(localStorage.getItem("booking-data"));
    console.log(JSON.parse(localStorage.getItem("booking-data")));
  });
  $("#from").selectmenu();
  $("#to").selectmenu();
  $(".sleeper-option").checkboxradio();
  $(".seating-option").checkboxradio();
  $(".food-option").checkboxradio();
  submitBooking();
});

function submitBooking(){
  $("#submit-booking").click(function(){
    if(runFormValidations()){
      window.location.replace("booking-result.html");
    } else {
      console.error("Form validation failed");
    }
  });
}

function runFormValidations(){
  console.log("running form validations");
  //todo write the form validations
  areFormErrors = false;
  errorMessages = "";
  errorMessages += "<ul>"; // return true if no errors -- run false if errors

  //check first and last name
  if($("#first-name").val().length === 0) {
        errorMessages += "<li>Missing first name.</li>";
        $("#first-name").addClass("error");
        areFormErrors = true;
    }
  if($("#last-name").val().length === 0) {
        errorMessages += "<li>Missing last name.</li>";
        $("#last-name").addClass("error");
        areFormErrors = true;
    }
  //check Emails
  var emailPattern =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
  if($("#email").val().length === 0 || !emailPattern.test($("#email").val())) {
      errorMessages += "<li>Invalid or missing email address.</li>";
      $("#email").addClass("error");
      areFormErrors = true;
    }
  //check Dates
  if($("#start-date").val().length === 0) {
        errorMessages += "<li>Missing start date.</li>";
        $("#start-date").addClass("error");
    }
  if($("#end-date").val().length === 0) {
        errorMessages += "<li>Missing end date.</li>";
        $("#end-date").addClass("error");
        areFormErrors = true;
    }

  errorMessages += "</ul>";
    if(areFormErrors) {
      document.getElementById("formErrors").innerHTML = errorMessages;
      document.getElementById("formErrors").style.display = "block";
      return false;
    } else {
        document.getElementById("formErrors").style.display = "none";
        return true;
    };
  };
