
//button - generates a

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);

  var fileText;

  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var fileText = rawFile.responseText;

      }
    }
  }

  rawFile.send(null);
  return fileText;
}

passages = readTextFile("passages_clean.txt");
encyclopedia = readTextFile("encyclopedia_vol1_clean.txt");

document.getElementById("text-container").innerHTML = encyclopedia;

console.log("loving it");
