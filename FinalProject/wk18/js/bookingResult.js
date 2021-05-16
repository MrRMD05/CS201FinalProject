
$(document).ready(function(){
  loadBookingData();
});

function loadBookingData(){
  const finalBookingResult = JSON.parse(localStorage.getItem("booking-data"));
  $("#complete-name").html(finalBookingResult["first_name"] + " " + finalBookingResult["last_name"]);
  $("#email-result").html(finalBookingResult["email"]) + " ";
  $("#booking-dates").html(finalBookingResult["start_date"] + " - " + finalBookingResult["end_date"]);
  $("#coming-from").html("You are coming from " + finalBookingResult["from"] + ".");
  $("#going-to").html("You are going to " + finalBookingResult["destination"] + ".");
}
