let currentDay = document.querySelector("#currentDay");

currentDay.textContent(moment().format("ddd MMM Do YYYY"));

const saveButton = $(".saveBtn");

// time block function for moments in time
timeBlock(() => {
  const hour = moment().hours();

  $(".time-block").each(function () {
    const currentHour = parseInt($(this).attr("id"));

    if (currentHour === hour) {
      $(this).addClass("present");
    } else if (currentHour < hour) {
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (currentHour > hour) {
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
});

// save event in local storage
saveBtn.on("click", function () {
  var timeOfDay = $(this).siblings(".hour").text();
  var activity = $(this).siblings(".activity").val();

  localStorage.setItem(timeOfDay, activity);
});

//save all events to use schedule
useSchedule(() => {
  $(".hour").each(function () {
    var currentHour = $(this).text();
    var currentEvent = localStorage.getItem(currentHour);

    if (currentEvent !== null) {
      $(this).siblings(".event").val(currentEvent);
    }
  });
});

timeBlock();
useSchedule();
