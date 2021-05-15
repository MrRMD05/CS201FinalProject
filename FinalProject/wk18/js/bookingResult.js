
$(document).ready(function(){
  loadBookingData();
});

function loadBookingData(){
  const finalBookingResult = JSON.parse(localStorage.getItem("booking-data"));
  $("#complete-name").html(finalBookingResult["first_name"] + " " + finalBookingResult["last_name"]);
  $("#booking-dates").html(finalBookingResult["start_date"] + " - " + finalBookingResult["end_date"]);
}
