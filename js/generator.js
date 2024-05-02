

function helloWorld() {
  console.log("Hello world");
}

function readTextFile(file) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);

  var fileText;

  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        fileText = rawFile.responseText;
      }
    }
  }

  rawFile.send(null);
  return fileText;
}


  const max_line_char_count = 60;
  const min_line_char_count = 40;

  const max_words = 10;
  const min_words = 5;

  const line_char_count_est = max_words*15;

function logPoem() {

  var scrap = [];

  var passages = readTextFile("passages_clean.txt");
  var encyclopedia = readTextFile("encyclopedia_vol1_clean.txt");
  var wonders = readTextFile("wonders_clean.txt");

  for (let i = 0; i < 14; i++) {
   var phrase  = "nothing yet";

      while(phrase === "nothing yet"){
        var src = Math.floor(Math.random()*3);

        if(src == 0){
          phrase = getRandomPhraseFromString(passages);
        }else if(src == 1){
          phrase = getRandomPhraseFromString(encyclopedia);
        }else{
          phrase = getRandomPhraseFromString(wonders);
        }
      }
      console.log(phrase);
      scrap.push(phrase);
  }

  document.getElementById("text-container").innerHTML = scrap.join("\n");
}


function getRandomPhraseFromString(sourceString){
  var random_starting_point = Math.floor(Math.random()*(sourceString.len-line_char_count_est));
  var fragment = sourceString.slice(random_starting_point, random_starting_point+line_char_count_est);
  fragment = fragment.slice(fragment.indexOf(" "));
  var fragment_words = fragment.split(" ");
  var word_count = Math.floor(Math.random()*(max_words-min_words))+min_words;
  var words = fragment_words.slice(0, word_count);
  phrase = words.join(" ");
  return phrase;
}
