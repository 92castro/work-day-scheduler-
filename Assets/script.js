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
});
