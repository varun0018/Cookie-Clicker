let count = 0;

//function that increments count when clicked on button
function increment() {
  count++;
  document.querySelector("#count-keeper").innerHTML = count;
}

//function to save count value

function save() {
  var previousPara = document.querySelector("#previous-para");
  previousPara.textContent += count + " - ";
  document.querySelector("#count-keeper").innerHTML = 0;
  count = 0;
}
