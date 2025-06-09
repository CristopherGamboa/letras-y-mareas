
function openCreateModal() {
    document.getElementById('event-modal-label').textContent = 'Añadir Evento';
    document.getElementById('event-form').reset();

    new bootstrap.Modal(document.getElementById('event-modal')).show();
}

function openEditModal() {
    document.getElementById('event-modal-label').textContent = 'Editar Evento';
    document.getElementById('event-form').reset();
    new bootstrap.Modal(document.getElementById('event-modal')).show();
}

const registerForm = document.getElementById('event-form');

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    registerEvent();
});

function registerEvent() {
    const event = {
        name: document.getElementById("event-name").value.trim(),
        instagram: document.getElementById("event-instagram").value.trim(),
        image: document.getElementById("event-image").value,
    };

    const isValid = validateEvent(event);

    if (isValid) {
        const eventSuccess = document.getElementById('event-success');
        eventSuccess.classList.remove('d-none');

        const modal = bootstrap.Modal.getInstance(document.getElementById('event-modal'));
        modal.hide();
        eventForm.reset();
    }
}

function validateEvent(event) {
    let isValid = true;

    clearAllErrors();

    // Validar nombre
    if (!event.name || !event.name.trim()) {
        showError("event-name", "El nombre es obligatorio.");
        isValid = false;
    }

    // Validar URL de Instagram
    const instagramRegex = /^(https?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._%-]+\/?$/;
    if (!event.instagram || !event.instagram.trim()) {
        showError("event-instagram", "El enlace de Instagram es obligatorio.");
        isValid = false;
    } else if (!instagramRegex.test(event.instagram)) {
        showError("event-instagram", "Debe ser una URL válida de Instagram (ej: https://www.instagram.com/usuario/).");
        isValid = false;
    }

    // Validar imagen
    if (!event.image || !event.image.trim()) {
        showError("event-image", "La imagen es obligatoria.");
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
    const fields = ["event-name", "event-instagram", "event-image"];
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

function deleteEvent(button) {
    if (confirm("¿Estás seguro de que deseas eliminar este evento?")) {
        const row = button.closest("tr");
        row.remove();
    }
}

