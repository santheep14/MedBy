const menuItems = {
    "home": "index.php",
    "about us": "about.php",
    "check appointment": "check-appointment.php",
    "booking": "booking.php",
    "contact": "contact.php",
    "doctor": "doctor/login.php"
  };
  
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  
  recognition.onstart = function() {
    console.log('Voice recognition started');
  };
  
  recognition.onresult = function(event) {
    const spokenText = event.results[0][0].transcript.toLowerCase().trim();
    console.log('Spoken text:', spokenText);
  
    for (const item in menuItems) {
      if (spokenText.includes(item)) {
        window.open(menuItems[item], '_blank');
        console.log(`Opening ${menuItems[item]} in new tab`);
        return;
      }
    }
    console.log('No menu item detected');
  };
  
  recognition.onerror = function(event) {
    console.error('Speech recognition error:', event.error);
  };
  
  recognition.onend = function() {
    console.log('Voice recognition ended');
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded');
    recognition.start();
  });
  