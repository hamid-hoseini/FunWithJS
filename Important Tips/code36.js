// web speech API

/** 
 * Web speech API is used to enable modern browsers recognize and synthesize speech(i.e, voice data into web apps). 
 * This API has been introduced by W3C Community in the year 2012. It has two main parts,

1 - SpeechRecognition (Asynchronous Speech Recognition or Speech-to-Text): 
It provides the ability to recognize voice context from an audio input and respond accordingly. 
This is accessed by the SpeechRecognition interface. The below example shows on how to use this 
API to get text from speech,

*/
window.SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition; // webkitSpeechRecognition for Chrome and SpeechRecognition for FF
const recognition = new window.SpeechRecognition();
recognition.onresult = (event) => {
  // SpeechRecognitionEvent type
  const speechToText = event.results[0][0].transcript;
  console.log(speechToText);
};
recognition.start();

/**
In this API, browser is going to ask you for permission to use your microphone

1- SpeechSynthesis (Text-to-Speech): It provides the ability to recognize voice context from an 
audio input and respond. This is accessed by the SpeechSynthesis interface. 
For example, the below code is used to get voice/speech from text,
*/ 

if ("speechSynthesis" in window) {
  var speech = new SpeechSynthesisUtterance("Hello World!");
  speech.lang = "en-US";
  window.speechSynthesis.speak(speech);
}

/**
The above examples can be tested on chrome(33+) browser's developer console. Note: 
This API is still a working draft and only available in Chrome and Firefox browsers(ofcourse Chrome 
  only implemented the specification)
 */