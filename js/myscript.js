//JSON object that will be stored in localStorage
let booking = {
  "first_name" : "",
  "last_name": "",
  "email" : "",
  "start_date": "",
  "end_date": "",
  "amenities" : {
    "number_beds" : 1,
    "type_beds" : "King",
    "breakfast" : true,
    "pool" : false
  }
};

let bookingTemp = JSON.parse(localStorage.getItem("booking-data"));//assumption booking data will be stored as a string

if (!bookingTemp){
  console.log("booking data does not exist");
} else {
  console.log("booking data found");
  booking = bookingTemp;
}

$(document).ready(function(){
  $("#myName").html("<h2>Michael Rodgers</h2>");

  $("#first-name").blur(function(){
    booking.first_name = $("#first-name").val();
  });
  $("#last-name").blur(function(){
    booking.last_name = $("#last-name").val();
  });
  submitBooking();

  $("#start-date").datepicker();
  $("#end-date").datepicker().on("change", function(){
    booking.start_date = $("#start-date").val();
    booking.end_date = $("#end-date").val();
    localStorage.setItem("booking-data", JSON.stringify(booking));
    console.log(localStorage.getItem("booking-data"));
    console.log(JSON.parse(localStorage.getItem("booking-data")));
  });

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
  return true;// return true if no errors -- run false if errors
}
