/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const parsed = parseInt(time);
  if (parsed < 12) {
    return "Good Morning";
  } else if (12 <= parsed & parsed <= 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(displayMsg) {
  document.getElementById("greeting").innerText = displayMsg;
}
