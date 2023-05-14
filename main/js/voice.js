// Define menu items and their associated page URLs
const menuItems = {
  "home": "index.html",
  "about us": "index.html",
  "symptom checker": "http://localhost:3001",
  "make an appointment": "http://localhost:3000/dams/index.php"
};

// Listen for speech recognition events
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  
  // Set recognition options
  recognition.continuous = true;
  recognition.lang = "en-US";
  
  // Listen for speech input
  recognition.onresult = function(event) {
    const last = event.results.length - 1;
    const spokenText = event.results[last][0].transcript.toLowerCase().trim();
    
    // Check if spoken text matches a menu item
    for (const item in menuItems) {
      if (spokenText.includes(item)) {
        window.open(menuItems[item], '_blank');
        recognition.start(); // Restart recognition after opening link
        return;
      }
    }
  };
  
  // Start recognition
  recognition.start();
  
  // Prompt user to speak menu item
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance("Speak a menu item to navigate");
  synth.speak(utterance);
}
