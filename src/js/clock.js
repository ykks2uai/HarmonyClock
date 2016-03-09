


function clock() {
  var date = new Date();

  updateDisplay(date);

  var delay = 1000 - new Date().getMilliseconds();
  setTimeout(clock, delay);
}

function updateDisplay(date) {
  var AA_str = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var YY = date.getFullYear();
  var MM = date.getMonth() + 1;
  var DD = date.getDate();
  var AA = date.getDay();
  var hh = date.getHours();
  var mm = date.getMinutes();
  var ss = date.getSeconds();

  if (MM < 10) {
    MM = "0" + MM;
  }
  if (DD < 10) {
    DD = "0" + DD;
  }
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  if (ss < 10) {
    ss = "0" + ss;
  }

  var displayDate = YY + '/' + MM + '/' + DD + ' (' + AA_str[AA] + ')';
  var displayTime = hh + ':' + mm + ':' + ss;

  document.getElementById("date").innerHTML = displayDate;
  document.getElementById("time").innerHTML = displayTime;
}
