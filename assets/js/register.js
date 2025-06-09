const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    registerUser();
});

function registerUser() {
    const user = {
        username: document.getElementById("register-username").value.trim(),
        email: document.getElementById("register-email").value.trim(),
        password: document.getElementById("register-password").value.trim(),
        confirmPassword: document.getElementById("register-password-confirm").value.trim(),
    };

    const isValid = validateUser(user);

    if (isValid) {
        const username = user.username;
        const email = user.email;
        const registerSuccess = document.getElementById('register-success');
        registerSuccess.classList.remove('d-none');

        localStorage.setItem('session', 
            JSON.stringify({ username, email }));
            
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}

function validateUser(user) {
    let isValid = true;

    clearAllErrors();

    if (!user.username.trim()) {
        showError("register-username", "El nombre es obligatorio.");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!user.email.trim()) {
        showError("register-email", "El correo electrónico es obligatorio.");
        isValid = false;
    } else if (!emailRegex.test(user.email)) {
        showError("register-email", "El formato del correo no es válido.");
        isValid = false;
    }

    const password = user.password;
    const confirmPassword = user.confirmPassword;
    const hasNumber = /\d/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (!password) {
        showError("register-password", "La contraseña es obligatoria.");
        isValid = false;
    } else {
        if (password.length < 6 || password.length > 18) {
            showError("register-password", "La contraseña debe tener entre 6 y 18 caracteres.");
            isValid = false;
        }
        if (!hasNumber.test(password) || !hasUpperCase.test(password) || !hasSpecialChar.test(password) || !hasLowerCase.test(password)) {
            showError("register-password", "La contraseña debe tener al menos una letra mayúscula, minúscula, un número y un carácter especial.");
            isValid = false;
        }
    }

    if (!confirmPassword) {
        showError("register-password-confirm", "Debes confirmar tu contraseña.");
        isValid = false;
    } else if (password !== confirmPassword) {
        showError("register-password-confirm", "Las contraseñas no coinciden.");
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add("is-invalid");
    const errorDiv = document.getElementById(`${fieldId}-errors`);
    errorDiv.classList.remove("d-none");
    errorDiv.innerHTML += `<div>${message}</div>`;
}

function clearAllErrors() {
    const fields = ["register-username", "register-email", "register-password", "register-password-confirm"];
    fields.forEach(id => {
        const field = document.getElementById(id);
        field.classList.remove("is-invalid");
    });
    const errorDivs = document.querySelectorAll("[id$='-errors']");
    errorDivs.forEach(div => {
        div.classList.add("d-none");
        div.innerHTML = "";
    });
}