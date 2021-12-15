// Variables

// End of Variables

var today = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // save to local storage
    localStorage.setItem(time, text);
  });
});

function timeTracker() {
    // Setting timeNow to the current time and hours for below function
  var timeNow = moment().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      console.log("here")
    }
  });
}

// Getting items from local storage
$("#hour-9am .description").val(localStorage.getItem("hour-9am"));
$("#hour-10am .description").val(localStorage.getItem("hour-10am"));
$("#hour-11am .description").val(localStorage.getItem("hour-11am"));
$("#hour-12pm .description").val(localStorage.getItem("hour-12pm"));
$("#hour-1pm .description").val(localStorage.getItem("hour-1pm"));
$("#hour-2pm .description").val(localStorage.getItem("hour-2pm"));
$("#hour-3pm .description").val(localStorage.getItem("hour-3pm"));
$("#hour-4pm .description").val(localStorage.getItem("hour-4pm"));
$("#hour-5pm .description").val(localStorage.getItem("hour-5pm"));

timeTracker();