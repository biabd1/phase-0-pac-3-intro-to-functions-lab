function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout (aWord) {
    console.log(aWord.toUpperCase( ));
  }
  function logWhisper (aWord) {
    console.log(aWord.toLowerCase( ));
  }
  function sayHiToHeadphonedRoommate (string) {
    if (string===string.toLowerCase()) {
      return "I can't hear you!";
    } 
    else if (string===string.toUpperCase()) {
      return "YES INDEED!";
  }
  else if (string==="Let's have dinner together!") {
    return "I would love to!"
  }
  }