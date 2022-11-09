// current day when user access the page
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY"));

//main function
$(function () {
  var saveButton = $(".saveBtn");
  //button to save to local storage
  saveButton.on("click", function () {
    var userInput = $(this).siblings(".description").val();
    var blockTime = $(this).parent().attr("id");
    console.log(blockTime);
    console.log(userInput);

    localStorage.setItem(blockTime, userInput);
  });

  // current hour in a 24 hour format
  var currentTime = dayjs().format("h:mm");
  var timeBlock = $(".time-block");
  timeBlock.each(function () {
    var rowTime = $(this).attr("id");
    //color change according to "past", "present", "future"
    if (currentTime < rowTime) {
      // class change to past time
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentTime == rowTime) {
      // class change to present time
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      // class change to future time
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
  //saved input according to time slot
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
