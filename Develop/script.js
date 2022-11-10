let currentDay = document.querySelector("#currentDay");

const saveButton = $(".saveBtn");

currentDay.textContent(moment().format("ddd MMM Do YYYY"));

// time block function for moments in time
 timeBlock() = () => {
    const hour = moment().hours();

    $(".time-block").each(function() {
        const currentHour = parseInt($(this).attr("id"));

        if (currentHour === hour) {
            $(this).addClass("present");
        }
        else if (currentHour < hour) {
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (currentHour > hour) {
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};
  // var currentHour = parseInt($("#currentDay").format("h"));
        // var currentHour = parseInt(currentDateTime.format("h"));

// save event in local storage
saveBtn.on("click", function () {
  var timeOfDay = $(this).siblings(".hour").text();
  var activity = $(this).siblings(".activity").val();

  localStorage.setItem(timeOfDay, activity);
});
