function navigate() {
  const hash = window.location.hash || '#home';
  document.querySelectorAll('main section').forEach(section => {
    section.hidden = '#' + section.id !== hash;
  });
}

document.getElementById('site-header').innerHTML = `
  <div class="top-band"></div>
  <div class="container">
    <div class="header-area">
      <div class="header-text">
        <header>
          <h1>Joey Popelka's Website</h1>
        </header>
        <nav>
          <a href="#home">Home</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div class="header-image">
        <a href="https://www.moma.org/collection/works/1536" target="_blank" rel="noopener noreferrer">
          <img src="Coonley Combo.png" alt="Coonley Playhouse window">
        </a>
      </div>
    </div>
    <div class="divider"></div>
  </div>
`;

window.addEventListener('hashchange', navigate);
navigate();
