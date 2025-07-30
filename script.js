document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('modeToggle');
  const body = document.body;

  const savedTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Apply theme
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    toggle.textContent = '☀️ Light Mode';
  } else {
    body.classList.add('light-mode');
    toggle.textContent = '🌙 Dark Mode';
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    toggle.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  });

  // Floating particles
  createParticles();

  // Email normalization
  document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', function () {
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput) {
        emailInput.value = emailInput.value.trim().toLowerCase();
      }
    });
  });

  // Auto-close alerts
  document.querySelectorAll('.alert').forEach((alert) => {
    setTimeout(() => {
      alert.classList.add('fade');
      setTimeout(() => alert.remove(), 150);
    }, 5000);
  });

  // Select glow
  document.querySelectorAll('select').forEach((select) => {
    select.addEventListener('focus', function () {
      this.style.boxShadow = '0 0 10px var(--neon-blue)';
    });
    select.addEventListener('blur', function () {
      this.style.boxShadow = 'none';
    });
  });

  // Credits Modal
  const creditsBtn = document.getElementById('creditsBtn');
  const creditsModal = document.createElement('div');
  creditsModal.className = 'credits-modal';
  creditsModal.innerHTML = `
    <div class="credits-content">
      <span class="credits-close" id="creditsClose">&times;</span>
      <h2 class="jdm-font">STUDENT MANAGEMENT SYSTEM</h2>
      <p>Created by:</p>
      <p class="mb-4">
        <span class="neon-text" id="balighotName">Balighot</span>, 
        <span class="neon-text" id="defeoName">Defeo</span>, 
        <span class="neon-text" id="turayaName">Turaya</span>
      </p>
      <p class="small text-unmuted">© 2025 All Rights Reserved</p>
    </div>
  `;
  document.body.appendChild(creditsModal);

  document.getElementById('creditsClose').addEventListener('click', () => {
    creditsModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  creditsModal.addEventListener('click', function (e) {
    if (e.target === creditsModal) {
      creditsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      creditsModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  creditsBtn.innerHTML = `Created by: 
    <span class="neon-text" id="balighotBtn">Balighot</span>, 
    <span class="neon-text" id="defeoBtn">Defeo</span>, 
    <span class="neon-text" id="turayaBtn">Turaya</span> © 2025`;

  creditsBtn.addEventListener('click', function () {
    creditsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Show name effects
  function showMessage(message, color = '#ff1e56') {
    const messageBox = document.createElement('div');
    messageBox.className = 'coder-message-box';
    messageBox.textContent = message;
    messageBox.style.backgroundColor = color;
    messageBox.style.left = `${Math.random() * 50 + 25}%`;
    messageBox.style.top = `${Math.random() * 50 + 25}%`;
    document.body.appendChild(messageBox);

    setTimeout(() => {
      messageBox.style.opacity = '0';
      setTimeout(() => messageBox.remove(), 300);
    }, 2000);
  }

  const nameClicks = [
    ['balighotName', 'The Solo Carry', '#ff1e56'],
    ['defeoName', 'The Inter', '#170677ff'],
    ['turayaName', 'AFK', '#9d00ff'],
    ['balighotBtn', 'The Solo Carry', '#ff1e56'],
    ['defeoBtn', 'The Inter', '#061f63ff'],
    ['turayaBtn', 'AFK', '#9d00ff']
  ];

  nameClicks.forEach(([id, msg, color]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        showMessage(msg, color);
      });
    }
  });

  // Coder icon + random thoughts
  const coderIcon = document.createElement('div');
  coderIcon.className = 'coder-icon';
  coderIcon.innerHTML = `
    <div class="coder">
      <div class="coder-head">
        <div class="coder-eyes">
          <div class="eye"></div>
          <div class="eye"></div>
        </div>
      </div>
      <div class="coder-body"></div>
      <div class="coder-laptop"></div>
      <div class="coder-coffee"></div>
      <div class="coder-thought">KEKW</div>
    </div>
  `;
  document.body.appendChild(coderIcon);

  const messages = [
    "I'll solo carry this sht", "BOMBACLAT", "MAMBO", "SKIBIDI",
    "Rizzler", "1V9", "KEKW", "Inta", "Solo Carry", "Skibidi"
  ];

  coderIcon.addEventListener('mouseenter', () => {
    const thought = coderIcon.querySelector('.coder-thought');
    thought.textContent = messages[Math.floor(Math.random() * messages.length)];
  });
});

// Particle animation
function createParticles() {
  const container = document.createElement('div');
  container.className = 'particles';
  document.querySelector('.jdm-background')?.appendChild(container);

  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 5 + 2;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.top = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 10}s`;
    p.style.animationDuration = `${Math.random() * 20 + 10}s`;
    p.style.backgroundColor = `hsl(${Math.random() * 60 + 200}, 100%, 50%)`;
    container.appendChild(p);
  }

  const style = document.createElement('style');
  style.textContent = `
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }
    .particle {
      position: absolute;
      border-radius: 50%;
      opacity: 0.6;
      animation: float linear infinite;
    }
    @keyframes float {
      0% { transform: translateY(0); opacity: 0.6; }
      50% { opacity: 0.9; }
      100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}
