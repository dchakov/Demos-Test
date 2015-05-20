var timer = setInterval('bang()', 1000);

function bang() {
    var now = new Date();
    var result = "It is now " + now;
    document.getElementById("timeField")
      .innerText = result;
}



