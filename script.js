function openLetter() {
  const env = document.getElementById('envelope');
  const letter = document.getElementById('letter');
  if (!env.classList.contains('open')) {
    env.classList.add('open');
    setTimeout(() => {
      letter.classList.remove('hidden');
      letter.scrollIntoView({ behavior: 'smooth' });
    }, 700);
  }
}

function closeLetter() {
  document.getElementById('envelope').classList.remove('open');
  document.getElementById('letter').classList.add('hidden');
}

function confettiBurst() {
  const colors = ['#ff85b5','#ffbde6','#ffd1dc','#fff07a','#f6a5c0'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.position = 'fixed';
    el.style.left = (Math.random() * 100) + '%';
    el.style.top = '-10px';
    el.style.width = (6 + Math.random() * 10) + 'px';
    el.style.height = (6 + Math.random() * 10) + 'px';
    el.style.background = colors[Math.floor(Math.random() * colors.length)];
    el.style.borderRadius = '4px';
    el.style.opacity = 0.9;
    el.style.animation = `fall ${1 + Math.random() * 2}s linear forwards`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
  }
}
