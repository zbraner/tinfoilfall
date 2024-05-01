

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


function logPoem() {
  var passages = readTextFile("passages_clean.txt");
  var encyclopedia = readTextFile("encyclopedia_vol1_clean.txt");


  var max_line_char_count = 60;
  var min_line_char_count = 40;

  var max_words = 10;
  var min_words = 5;

  var line_char_count_est = max_words*15;

  var passages_len = passages.length;
  var personal_passages_len = encyclopedia.length;

  for (let i = 0; i < 14; i++) {
   var phrase  = "nothing yet";

      while(phrase === "nothing yet"){
        if(i%2 == 0){
          var random_starting_point = Math.floor(Math.random()*(passages_len-line_char_count_est));
          var fragment = passages.slice(random_starting_point, random_starting_point+line_char_count_est);
          fragment = fragment.slice(fragment.indexOf(" "));
          var fragment_words = fragment.split(" ");
          var word_count = Math.floor(Math.random()*(max_words-min_words))+min_words;
          var words = fragment_words.slice(0, word_count);
          phrase = words.join(" ");
        }else{
          var random_starting_point = Math.floor(Math.random()*(personal_passages_len-line_char_count_est));
          var fragment = encyclopedia.slice(random_starting_point, random_starting_point+line_char_count_est);
          fragment = fragment.slice(fragment.indexOf(" "));
          var fragment_words = fragment.split(" ");
          var word_count = Math.floor(Math.random()*(max_words-min_words))+min_words;
          var words = fragment_words.slice(0, word_count);
          phrase = words.join(" ");
        }
      }
      console.log(phrase);
  }
}
