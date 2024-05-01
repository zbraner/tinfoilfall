
//button - generates a
function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText;
        document.getElementById("text-container").innerHTML = allText;
      }
    }
  }
  rawFile.send(null);
}

readTextFile("passages_clean.txt");

console.log("loving it");
