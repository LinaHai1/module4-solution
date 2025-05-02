(function () {
  var names = ["Jarid", "Adam", "Sofia", "Lina", "Jamal", "Jawad", "Janat", "Khalil", "Sarah", "Mouad", "Jaber", "Salma"];

  for (var i = 0; i < names.length; i++) {
    var name = names[i];
    var firstLetter = name.charAt(0).toLowerCase();

    if (firstLetter === 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
