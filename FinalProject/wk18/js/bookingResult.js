
$(document).ready(function(){
  loadBookingData();
});

function loadBookingData(){
  const finalBookingResult = JSON.parse(localStorage.getItem("booking-data"));
  $("#complete-name").html("Name: " + finalBookingResult["first_name"] + " " + finalBookingResult["last_name"]);
  $("#email-result").html("Email: " + finalBookingResult["email"]);
  $("#booking-dates").html("Date: " + finalBookingResult["start_date"] + " - " + finalBookingResult["end_date"]);
  $("#coming-from").html("You are coming from " + finalBookingResult["from"] + ".");
  $("#going-to").html("You are going to " + finalBookingResult["destination"] + ".");
  $("#bed-number").html("Bed Number: " + finalBookingResult["sleeper_cabin"]);
  $("#seat-number").html("Seat Number: " + finalBookingResult["normal_seating"]);
  $("#food-type").html("Ideal Food: " + finalBookingResult["food_preference"]);
}
