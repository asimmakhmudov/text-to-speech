const playBTN = document.getElementById('playBTN');
const pauseBTN = document.getElementById('pauseBTN');
const stopBTN = document.getElementById('stopBTN');
const textInput = document.getElementById('textInput');
const speechSpeed = document.getElementById('speechSpeed')
let currentCharacter;

playBTN.addEventListener('click', () => {
    playText(textInput.value);
});

pauseBTN.addEventListener('click', pauseText);
stopBTN.addEventListener('click', stopText);
speechSpeed.addEventListener('input', () => {
    stopText()
    playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()

utterance.addEventListener('end', ()=> {
    textInput.disabled = false
});

utterance.addEventListener('boundary', e => {
    currentCharacter = e.charIndex;
});

function playText(text) {
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    if(speechSynthesis.speaking) return 
        utterance.text = text;
        utterance.rate = speechSpeed.value || 1;
        textInput.disabled = true;
        speechSynthesis.speak(utterance);
    
}

function pauseText() {
    if(speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
}