let currentDay = document.querySelector("#currentDay");

const saveButton = $(".saveBtn");

currentDay.textContent(moment().format("ddd MMM Do YYYY"));

// save event in local storage
saveBtn.on("click", function () {
  var timeOfDay = $(this).siblings(".hour").text();
  var activity = $(this).siblings(".activity").val();

  localStorage.setItem(timeOfDay, activity);
});
