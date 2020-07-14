//1. add current time via momentjs
var currentTime = moment().format("H");

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
// console.log(currentTime);

setInterval(function () {
  $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
  console.log(currentTime);
}, 1000);

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

  var btnEl = $("<button>").attr(
    "class",
    "btn btn-outline-secondary submit saveBtn"
  );
  var icon = $("<i>").attr("class", "far fa-save");

  $(".container").append(d1);
  d1.append(d2);
  d2.append(span);
  d1.append(input);
  d1.append(btnEl);
  btnEl.append(icon);

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

  $(".saveBtn").on("click", function (event) {
    //alert("clicked");
    var element = event.target;
    console.log($(this));
    // if ($(this).matches("button")) {
    let value = $(this).prev().val();
    var dataIndex = $(this).prev().attr("data-index");
    // console.log($(this).prev().val());
    localStorage.setItem(dataIndex, value);
    console.log(value);
    // }
  });

  let tasks = localStorage.getItem(i);
  console.log("task", tasks);
  input.val(tasks);
}

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
