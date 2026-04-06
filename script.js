window.onload = function () {
  var display = document.getElementById("display");

  var buttons = document.querySelectorAll(".buttons button");

  buttons.forEach(function(btn) {
    btn.onclick = function() {
      var value = btn.innerText;

      if (value === "C") {
        display.value = "";
      } else if (value === "=") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } else if (value === "×") {
        display.value += "*";
      } else if (value === "÷") {
        display.value += "/";
      } else if (value === "√") {
        display.value = Math.sqrt(display.value);
      } else if (value === "^") {
        display.value += "**";
      } else {
        display.value += value;
      }
    };
  });
};