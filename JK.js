let noBtn = document.getElementById("noBtn");
let yesBtn = document.getElementById("yesBtn");
let container = document.querySelector(".container");
let letter = document.querySelector(".letter");
const typedEl = document.getElementById("typedLetter");

let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;

  // Smooth scale (grows dramatically after each click)
  let scale = 1 + (noCount * 2.5);

  // Expand and center the "No" button
  noBtn.style.position = "fixed";
  noBtn.style.top = "50%";
  noBtn.style.left = "50%";
  noBtn.style.transform = `translate(-50%, -50%) scale(${scale})`;
  noBtn.style.zIndex = "999";
  noBtn.style.transition = "transform 0.3s ease";

  // After 15 clicks, hide the buttons and show the letter
  if (noCount >= 15) {
    container.style.display = "none";
    letter.classList.remove("hidden");
    typeMessage(fullMessage, typedEl, 30);
  }
});

yesBtn.addEventListener("click", () => {
  alert("Yay! 💖 You made my day!");
});

// Typing animation for the love letter
const fullMessage = `i just wanted to take a bit of time to say thank you. thank you for staying, for being patient, and for choosing to go through everything with me. we’ve shared a lot of ups and downs. not everything was easy, and some days felt heavier than others. but even on the rough days, we stayed. and i think that’s what helped us grow. and even when things haven’t been easy, you still stayed. that means more than i can explain.\n
\nwe’ve been through a lot, and honestly, there were times we didn’t really know what to do or how to handle things. pero kahit gano’n, we still showed up for each other. maybe not perfectly, but genuinely. and i think that says a lot.\n
\nlately, i’ve really appreciated how you’ve been more open, even in small ways. you probably don’t even notice it, but i do. and it helps me feel closer to you.\n
\ni still choose you. and i still want to stay with you. this isn’t something i take lightly — it’s something i want to keep building with you, slowly but surely. we have things to look forward to, and that gives me a quiet kind of hope.\n
\nalso, i still think about that random thing you said before — you know what i’m talking about. still makes me smile, every time.\n
\nthat’s it. no big words, just really grateful to be here with you.\n
\nlove,\nme`;

function typeMessage(text, element, speed = 30) {
  let i = 0;
  function type() {
    if (i < text.length) {
      let char = text[i];
      element.innerHTML += (char === '\n') ? '<br>' : char;
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
