function showLetter() {
  const el = document.getElementById("letter");
  el.classList.toggle("hidden");

  if (!el.classList.contains("hidden")) {
    // Confetti effect
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = getRandomColor();
      confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
      el.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
    setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
  }
}

function getRandomColor() {
  const colors = ['#ff0000','#ff7f00','#ffff00','#00ff00','#0000ff','#4b0082','#8f00ff','#ff69b4'];
  return colors[Math.floor(Math.random() * colors.length)];
}
