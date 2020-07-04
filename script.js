//1. add current time via momentjs
var currentTime = moment().format("H");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));

$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(currentTime);

var timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//1. create var
//2. add all the styling
//3. append to html

for (var i = 0; i < timeArray.length; i++) {
  var d1 = $("<div>").attr("class", "input-group mb-3");
  d1.attr("class", "input-group mb-3");

  var d2;
  var span = $("<span>");
  if (timeArray[i] == 12) {
    span.text(timeArray[i] + " PM");
  } else if (timeArray[i] <= 12) {
    span.text(timeArray[i] + " AM");
  }
  //else if( greater than 12 - 12 and add pm)

  d1.append(span);
  $(".container").append(d1);
  var input;
  var btn;
}

// <div class="input-group mb-3">
//   <div class="input-group-prepend">
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

//d1,d2, span, input, btn
//d2.append(span)
//d1.append(d2);
//d1.append(input)
//d1.append(btn)

//2. creating one inputarea with btn, then run for to dynamically add the rest
//add style to past present and future
//if past
//currentTime -timeArray[i] <0
//if future
//currentTime -timeArray[i] >0
//if present
//currentTime == timeArray[i]
//add the present attr

//3. local storage
//store data into localStorage
//get the data from localStorage then append to specific input area
//hour9= "Test1"

//key="9" value="Test1"
