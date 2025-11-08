// Envelope open + letter show
function openLetter() {
  const env = document.getElementById('envelope');
  const letter = document.getElementById('letter');

  if (!env.classList.contains('open')) {
    env.classList.add('open');
    setTimeout(() => {
      letter.classList.remove('hidden');
      letter.setAttribute('aria-hidden', 'false');
      letter.scrollIntoView({ behavior: 'smooth' });
    }, 650);
  } else {
    if (letter.classList.contains('hidden')) {
      letter.classList.remove('hidden');
      letter.setAttribute('aria-hidden', 'false');
      letter.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Close the letter
function closeLetter() {
  const env = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  letter.classList.add('hidden');
  letter.setAttribute('aria-hidden', 'true');
  env.classList.remove('open');
}

// Confetti burst
function confettiBurst() {
  const colors = ['#ff4da6','#ffd166','#6beaa5','#80d0ff','#c78bff','#ffd1dc','#fff07a'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.left = (10 + Math.random() * 80) + '%';
    el.style.top = (-10 + Math.random() * 10) + 'vh';
    el.style.width = (6 + Math.random() * 10) + 'px';
    el.style.height = (8 + Math.random() * 16) + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.animationDuration = (1.2 + Math.random() * 2) + 's';
    el.style.transform = 'translateY(-40vh) rotate(' + (Math.random() * 360) + 'deg)';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}
