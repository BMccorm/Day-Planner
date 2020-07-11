//1. add current time via momentjs
var currentTime = moment().format("H");
console.log(moment().format("MMMM Do YYYY, h:mm a"));

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
console.log(currentTime);

const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//2. creating one input area with btn, then run for loop to dynamically add the rest
for (var i = 0; i < timeArray.length; i++) {
  var span = $("<span>").attr("class", "input-group-text");
  var d1 = $("<div>").attr("class", "input-group mb-3");
  var d2 = $("<div>").attr("class", "input-group-prepend");
  var input = $("<input>")
    .attr("class", "form-control userInput")
    .attr("id", "input" + i);

  var dataIndex = input.attr("data-index", i);
  console.log(dataIndex);

  var btnEl = $("<button>").attr("class", "btn btn-outline-secondary submit");
  // btn.textContent = "test";

  $(".container").append(d1);
  d1.append(d2);
  d2.append(span);
  d1.append(input);
  d1.append(btnEl);

  if (timeArray[i] == 12) {
    span.text(timeArray[i] + " PM");
  } else if (timeArray[i] >= 12) {
    span.text(timeArray[i] - 12 + " PM");
  } else if (timeArray[i] <= 12) {
    span.text(timeArray[i] + " AM");
  }

  if (currentTime == timeArray[i]) {
    span.attr("class", "present");
  } else if (currentTime - timeArray[i] < 0) {
    span.attr("class", "future");
  } else if (currentTime - timeArray[i] > 0) {
    span.attr("class", "past");
  }

  btnEl.on("click", function (event) {
    var element = event.target;
    if (element.matches("button")) {
      let value = $(this).prev().val();
      var dataIndex = $(this).prev().attr("data-index");
      console.log($(this).prev().val());
      localStorage.setItem(dataIndex, value);
    }
  });
}

//3. local storage
//store data into localStorage
//get the data from localStorage then append to specific input area

// <div 1 class="input-group mb-3">
//   <div 2 class="input-group-prepend">
//     <span class="input-group-text" value="9">
//       HOUR
//     </span>
//   </div>
//   <input
//     type="text"
//     class="form-control userInput"
//     id="9"
//     aria-label="Amount (to the nearest dollar)"
//   />

//   <button class="btn btn-outline-secondary submit" type="button" id="9">
//     Submit
//   </button>
// </div>;
