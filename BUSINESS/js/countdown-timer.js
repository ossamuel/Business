var increment_the_value = 0;

// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time

  // Find the distance between now and the count down date
  var distance = increment_the_value + 1;

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = distance;

  // If the count down is finished, write some text
  if (distance > 250) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
