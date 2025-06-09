document.addEventListener('DOMContentLoaded', () => {
  // Secciones
  const loginSection = document.getElementById('login-section');
  const recoverSection = document.getElementById('recover-section');

  // Botones para cambiar vistas
  const showRecoverBtn = document.getElementById('show-recover-btn');
  const backToLoginFromRecover = document.getElementById('back-to-login-from-recover');

  // Formularios
  const loginForm = document.getElementById('login-form');
  const recoverForm = document.getElementById('recover-form');

  // Verificar sesión
  let session = JSON.parse(localStorage.getItem('admin-session'));

  function showSection(section) {
    // Ocultar todos
    [loginSection, recoverSection].forEach(s => s.style.display = 'none');
    // Mostrar el que pidamos
    section.style.display = 'block';
  }

  if (session) {
    location.href = 'dashboard.html';
  } else {
    showSection(loginSection);
  }

  // Navegación botones
  showRecoverBtn.addEventListener('click', () => showSection(recoverSection));
  backToLoginFromRecover.addEventListener('click', () => showSection(loginSection));

  // Simula login
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
      const fakeSession = { username: 'Cristopher Gamboa', email };
      const loginSuccess = document.getElementById('login-success');
      
      loginSuccess.classList.remove('d-none');
      localStorage.setItem('admin-session', JSON.stringify(fakeSession));
      
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });

  // Simula recuperación
  recoverForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('recover-email').value;
    if (email) {
      const recoverySuccess = document.getElementById('recover-success');
      recoverySuccess.classList.remove('d-none');

      setTimeout(() => {
        showSection(loginSection);
        recoverySuccess.classList.add('d-none');
      }, 1000);
    }
  });
});
