
  const overlay = document.createElement('div');
  overlay.id = 'vuelingNewsletterOverlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9998;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: none;
  `;

  const modal = document.createElement('div');
  modal.id = 'vuelingNewsletterModal';
  modal.style.cssText = `
    position: fixed;
    top: 50%;
    right: -400px;
    transform: translateY(-50%);
    width: 380px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    padding: 0;
    overflow: hidden;
    transition: right 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  `;

  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 12px;
    right: 12px;
    background: transparent;
    border: none;
    font-size: 28px;
    color: #4C4C4B;
    cursor: pointer;
    line-height: 1;
    padding: 0;
    width: 30px;
    height: 30px;
    transition: color 0.2s;
  `;
  closeBtn.onmouseover = () => closeBtn.style.color = '#000000';
  closeBtn.onmouseout = () => closeBtn.style.color = '#4C4C4B';

  const header = document.createElement('div');
  header.style.cssText = `
    background-color: #FFCC00;
    padding: 24px 24px 20px;
  `;

  const title = document.createElement('h2');
  title.textContent = '¡No es publicidad invasiva!';
  title.style.cssText = `
    margin: 0 0 8px 0;
    font-family: Arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #000000;
  `;

  const content = document.createElement('div');
  content.style.cssText = `
    padding: 24px;
  `;

  const description = document.createElement('p');
  description.textContent = 'Aquí hay ofertas de vuelos especiales para alguien especial. Si pulsas, puedes suscribirte a la newsletter';
  description.style.cssText = `
    margin: 0 0 20px 0;
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #4C4C4B;
  `;

  const label = document.createElement('label');
  label.textContent = 'Email';
  label.style.cssText = `
    display: block;
    margin-bottom: 8px;
    font-family: Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #000000;
  `;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'correofalso@email.com';
  emailInput.style.cssText = `
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-sizing: border-box;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  `;
  emailInput.onfocus = () => emailInput.style.borderColor = '#FFCC00';
  emailInput.onblur = () => emailInput.style.borderColor = '#e0e0e0';

  const ctaButton = document.createElement('a');
  ctaButton.href = 'https://www.vueling.com/es/servicios-vueling/mas-servicios-vueling/newsletter-vuela';
  ctaButton.target = '_blank';
  ctaButton.textContent = 'Ir al enlace';
  ctaButton.style.cssText = `
    display: block;
    width: 100%;
    padding: 14px;
    background-color: #FFCC00;
    color: #000000;
    text-align: center;
    text-decoration: none;
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
    transition: background-color 0.2s, transform 0.1s;
  `;
  ctaButton.onmouseover = () => {
    ctaButton.style.backgroundColor = '#FFD633';
    ctaButton.style.transform = 'translateY(-1px)';
  };
  ctaButton.onmouseout = () => {
    ctaButton.style.backgroundColor = '#FFCC00';
    ctaButton.style.transform = 'translateY(0)';
  };

  header.appendChild(title);
  content.appendChild(description);
  content.appendChild(label);
  content.appendChild(emailInput);
  content.appendChild(ctaButton);
  
  modal.appendChild(closeBtn);
  modal.appendChild(header);
  modal.appendChild(content);

  function closeModal() {
    modal.style.right = '-400px';
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }

  closeBtn.onclick = closeModal;
  overlay.onclick = closeModal;

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  setTimeout(() => {
    overlay.style.display = 'block';
    setTimeout(() => {
      overlay.style.opacity = '1';
      modal.style.right = '20px';
    }, 10);
  }, 3000);

