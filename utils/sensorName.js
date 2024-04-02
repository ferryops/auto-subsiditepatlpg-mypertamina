function sensorName(name) {
  var words = name.split(" ");

  var censoredName = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length === 1) {
      censoredName += words[i] + " ";
    } else {
      var censoredWord = words[i][0];
      for (var j = 1; j < words[i].length - 1; j++) {
        censoredWord += "x";
      }
      censoredWord += words[i][words[i].length - 1];
      censoredName += censoredWord + " ";
    }
  }

  censoredName = censoredName.trim();

  return censoredName;
}
exports.sensorName = sensorName;
