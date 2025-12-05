// principal.js - renderização de cards, busca, modal, toggle mobile e tema
document.addEventListener('DOMContentLoaded', () => {

  // dados de exemplo (substitua por dados reais)
  const demos = [
    { id:1, title:'Jogo da Memória', meta:'10-13 anos', thumb:'./img/jogo.memoria.jpg', desc:'Exercite a memória com cartas divertidas.' },
    { id:2, title:'Caça Palavras', meta:'10-13 anos', thumb:'./img/caca.palavras.png', desc:'Jogo de palavras e raciocínio.' },
    { id:3, title:'Caça dos Sentidos', meta:'4-7 anos', thumb:'./img/caca.sentidos.png', desc:'Atividades sensoriais.' },
    { id:4, title:'Pedra Papel Tesoura', meta:'8-12 anos', thumb:'./img/pedra.papel.png', desc:'Jogo clássico para raciocínio.' },
    { id:5, title:'Jogo da Memória (2)', meta:'4-7 anos', thumb:'./img/jogo.memoria2.png', desc:'Versão infantil com cores.' },
    { id:6, title:'Quebra-cabeça', meta:'6-9 anos', thumb:'./img/quebra.cranio.png', desc:'Montar peças e imaginar.' },
    { id:7, title:'Desenhe e Aprenda', meta:'5-8 anos', thumb:'./img/desenha.png', desc:'Desafios criativos.' },
    { id:8, title:'Adivinhe o Som', meta:'4-7 anos', thumb:'./img/advinhe.som.png', desc:'Atividades auditivas.' },
  ];

  const cardsRoot = document.getElementById('cards');

  function render(list){
    cardsRoot.innerHTML = '';
    list.forEach(item => {
      const el = document.createElement('div');
      el.className = 'card';
      el.tabIndex = 0;
      el.innerHTML = `
        <img class="thumb" src="${item.thumb}" alt="${item.title}" />
        <div class="body">
          <div class="title">${item.title}</div>
          <div class="meta">${item.meta}</div>
        </div>
      `;
      el.addEventListener('click', () => openModal(item));
      el.addEventListener('keydown', (e) => { if(e.key === 'Enter') openModal(item); });
      cardsRoot.appendChild(el);
    });
  }

  // inicial
  render(demos);

  // search
  const searchInput = document.getElementById('searchInput');
  document.getElementById('searchBtn').addEventListener('click', () => {
    const q = searchInput.value.trim().toLowerCase();
    const filtered = demos.filter(d => d.title.toLowerCase().includes(q));
    render(filtered);
  });
  searchInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){ document.getElementById('searchBtn').click(); }
  });

  // sidebar mobile toggle
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-show');
  });

  // theme toggle (dark/light)
  const themeToggle = document.getElementById('themeToggle');
  function setTheme(isLight){
    if(isLight){
      document.body.classList.add('theme-light');
      localStorage.setItem('ll-theme','light');
    } else {
      document.body.classList.remove('theme-light');
      localStorage.setItem('ll-theme','dark');
    }
  }
  // initialize theme from localStorage or system
  const saved = localStorage.getItem('ll-theme');
  if(saved === 'light') setTheme(true);
  else if(saved === 'dark') setTheme(false);
  else {
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight);
  }
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('theme-light');
    localStorage.setItem('ll-theme', isLight ? 'light' : 'dark');
  });

  // modal open/close
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeModal = document.getElementById('closeModal');

  function openModal(item){
    modalImg.src = item.thumb;
    modalTitle.textContent = item.title;
    modalDesc.textContent = item.desc;
    modal.classList.remove('hidden');
    // focus for accessibility
    closeModal.focus();
  }
  closeModal.addEventListener('click', () => modal.classList.add('hidden'));
  modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.add('hidden'); });

  // playNow action (example)
  document.getElementById('playNow').addEventListener('click', () => {
    alert('Abrir jogo (exemplo). Aqui você pode conectar ao backend/launcher.');
  });

  function abrirAulas() {
    alert("Abrindo a área de aulas!");
  }


});
