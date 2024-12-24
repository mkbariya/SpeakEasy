const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();
rec.lang = "en-US";
rec.continuous = true;  

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const textArea = document.getElementById("txt");

startBtn.addEventListener("click", () => {
  rec.start(); 
  startBtn.textContent = "Listening...";
  startBtn.disabled = true; 
  stopBtn.disabled = false; 
});

stopBtn.addEventListener("click", () => {
  rec.stop(); 
  startBtn.textContent = "Start Listening";
  stopBtn.disabled = true; 
  startBtn.disabled = false; 
});

rec.onresult = function (e) {
  
  let transcript = "";
  for (let i = 0; i < e.results.length; i++) {
    transcript += e.results[i][0].transcript + " ";
  }
  textArea.value = transcript.trim();  
};

rec.onend = function () {
  
  startBtn.textContent = "Start Listening";
  stopBtn.disabled = true; 
  startBtn.disabled = false; 
};

