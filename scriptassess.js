(function () {

var names = ["Yalamandala", "Siva", "Keshav", "Jagadish", "Pablo", "Lawrence", "Javier", "Pinkman", "Lexical", "Coursera","Walter"];


for (var i = 0; i < names.length; i++) {


  var firstLetter = names[i].charAt(0).toLowerCase();

 
  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}

})();