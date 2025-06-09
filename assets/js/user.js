document.addEventListener('DOMContentLoaded', () => {
  // Secciones
  const loginSection = document.getElementById('login-section');
  const registerSection = document.getElementById('register-section');
  const recoverSection = document.getElementById('recover-section');
  const profileSection = document.getElementById('profile-section');

  // Botones para cambiar vistas
  const showRegisterBtn = document.getElementById('show-register-btn');
  const showRecoverBtn = document.getElementById('show-recover-btn');
  const backToLoginFromRegister = document.getElementById('back-to-login-from-register');
  const backToLoginFromRecover = document.getElementById('back-to-login-from-recover');
  const logoutBtn = document.getElementById('logout-btn');

  // Formularios
  const loginForm = document.getElementById('login-form');
  const recoverForm = document.getElementById('recover-form');
  const profileForm = document.getElementById('profile-form');

  // Verificar sesión
  let session = JSON.parse(localStorage.getItem('session'));

  function showSection(section) {
    // Ocultar todos
    [loginSection, registerSection, recoverSection, profileSection].forEach(s => s.style.display = 'none');
    // Mostrar el que pidamos
    section.style.display = 'block';
  }

  if (session && session.username && session.email) {
    showSection(profileSection);
    document.getElementById('profile-username').value = session.username;
    document.getElementById('profile-email').value = session.email;
  } else {
    showSection(loginSection);
  }

  // Navegación botones
  showRegisterBtn.addEventListener('click', () => showSection(registerSection));
  showRecoverBtn.addEventListener('click', () => showSection(recoverSection));
  backToLoginFromRegister.addEventListener('click', () => showSection(loginSection));
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
      localStorage.setItem('session', JSON.stringify(fakeSession));
      
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  });

  // Simula recuperación (solo alert)
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

  // Guardar cambios perfil (simulado)
  profileForm.addEventListener('submit', e => {
    e.preventDefault();
    const username = document.getElementById('profile-username').value;
    const email = document.getElementById('profile-email').value;
    if (username && email) {
      const profileSuccess = document.getElementById('profile-success');
      profileSuccess.classList.remove('d-none');

      localStorage.setItem('session', JSON.stringify({ username, email }));
    }
  });

  // Logout
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('session');
    location.reload();
  });
});
