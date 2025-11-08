function openLetter() {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  confettiBurst();
}

function closeLetter() {
  document.getElementById("letter").classList.add("hidden");
  document.getElementById("envelope").classList.remove("hidden");
}

// Confetti effect 🎉
function confettiBurst() {
  const colors = ["#ff69b4", "#ffb6c1", "#ffd1dc", "#fff0f5", "#ffc0cb"];
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
}

// Confetti style dynamically
const style = document.createElement('style');
style.textContent = `
.confetti {
  position: fixed;
  top: -10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  opacity: 0.8;
  animation: fall linear forwards;
  z-index: 9999;
}

@keyframes fall {
  to {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}
`;
document.head.appendChild(style);
