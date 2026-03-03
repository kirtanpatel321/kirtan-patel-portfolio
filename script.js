const text = "Specializing in secure software systems, cryptography, and resilient architecture design.";
const typingElement = document.querySelector(".typing-text");

let index = 0;

function typeText() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 80);  // slower typing speed
    }
}

window.addEventListener("load", typeText);