//issues!
// there will be a problem with the لا
function convertTheText(){

   //list of the English Characters and it's corresponding Arabic Characters
   var englishLayout= { "q":"ض", "w":"ص", "e":"ث", "r":"ق", "t":"ف", "y":"غ", "u":"ع", "i":"ه", "o":"خ","p":"ح", "[":"ج", "]":"د", "a":"ش", "s":"س", "d":"ي", "f":"ب", "g":"ل", "h":"ا", "j":"ت", "k":"ن", "l":"م", ";":"ك", "'":"ط", "z":"ئ", "x":"ء", "c":"ؤ", "v":"ر", "b":"ﻻ", "n":"ى", "m":"ة", ",":"و", ".":"ز", "/":"ظ" };
   //list of the arabic Characters and it's corresponding english Characters
   var arabicLayout= { "ض":"q", "ص":"w", "ث":"e", "ق":"r", "ف":"t", "غ":"y", "ع":"u", "ه":"i", "خ":"o", "ح":"p", "ج":"[", "د":"]", "ش":"a", "س":"s", "ي":"d", "ب":"f", "ل":"g", "ا":"h", "ت":"j", "ن":"k", "م":"l", "ك":";", "ط":"'", "ئ":"z", "ء":"x", "ؤ":"c", "ر":"v", "ﻻ":"b", "ى":"n", "ة":"m", "و":",", "ز":".", "ظ":"/" };
   var input = document.getElementById("input").value;
   var outputParahraph = document.getElementById("output");
   var output="";
   for(var i in input){
      var inputCharacter = input[i];

      // handle the English upper case
      if(isLetter(inputCharacter) &&inputCharacter == inputCharacter.toUpperCase())
          inputCharacter=inputCharacter.toLowerCase();

      /** check out if the Character in the arabic or in the englishLayout ,,
      * else , the output will be the same
      */
    if(arabicLayout.hasOwnProperty(inputCharacter))
        output+=arabicLayout[inputCharacter] ;
    else if (englishLayout.hasOwnProperty(inputCharacter))
        output+=englishLayout[inputCharacter]
    else
      output+=inputCharacter;

    }//for loop

    //  converting!
    document.getElementById("input").value = output;
  }
//upper case
  function isLetter(str) {
    return str.length === 1 && str.match(/[A-Z]/i);
  }
    // a handler to listen for ctrl + e  to function
function doc_keyUp(e) {
  // this would test for whichever key is 40 and the ctrl key at the same time
  if (e.ctrlKey &&  e.keyCode == 69) {
      // call your function to do the thing
      convertTheText();
  }
}
document.addEventListener('keyup', doc_keyUp, false);
