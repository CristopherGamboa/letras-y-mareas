function openCreateReviewModal() {
    document.getElementById('review-modal-label').textContent = 'Añadir Reseña';
    document.getElementById('review-form').reset();

    new bootstrap.Modal(document.getElementById('review-modal')).show();
}

function openEditReviewModal() {
    document.getElementById('review-modal-label').textContent = 'Editar Reseña';
    document.getElementById('review-form').reset();
    
    new bootstrap.Modal(document.getElementById('review-modal')).show();
}

const reviewForm = document.getElementById('review-form');

reviewForm.addEventListener('submit', e => {
    e.preventDefault();
    registerReview();
});

function registerReview() {
    const review = {
        book: document.getElementById("review-book").value.trim(),
        image: document.getElementById("review-image").value.trim(),
        review: document.getElementById("review-text").value.trim(),
        stars: document.getElementById("review-stars").value.trim(),
        author: document.getElementById("review-author").value.trim(),
        year: document.getElementById("review-year").value.trim(),
    };

    const isValid = validateReview(review);

    if (isValid) {
        const reviewSuccess = document.getElementById('review-success');
        reviewSuccess.classList.remove('d-none');

        const modal = bootstrap.Modal.getInstance(document.getElementById('review-modal'));
        modal.hide();
        reviewForm.reset();
    }
}

function validateReview(review) {
    let isValid = true;

    clearAllReviewErrors();

    // Validar libro
    if (!review.book) {
        showReviewError("review-book", "El libro es obligatorio.");
        isValid = false;
    }

    // Validar imagen
    if (!review.image) {
        showReviewError("review-image", "La imagen es obligatoria.");
        isValid = false;
    }

    // Validar texto
    if (!review.review) {
        showReviewError("review-text", "La reseña no puede estar vacía.");
        isValid = false;
    }

    // Validar estrellas
    const starsNum = parseInt(review.stars);
    if (!review.stars || isNaN(starsNum) || starsNum < 1 || starsNum > 5) {
        showReviewError("review-stars", "Las estrellas deben ser un número del 1 al 5.");
        isValid = false;
    }

    // Validar autor
    if (!review.author) {
        showReviewError("review-author", "El autor es obligatorio.");
        isValid = false;
    }

    // Validar año
    const currentYear = new Date().getFullYear();
    const yearNum = parseInt(review.year);
    if (!review.year || isNaN(yearNum) || yearNum < 0 || yearNum > currentYear) {
        showReviewError("review-year", `El año debe estar entre 0 y ${currentYear}.`);
        isValid = false;
    }

    return isValid;
}

function showReviewError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add("is-invalid");
    const errorDiv = document.getElementById(`${fieldId}-errors`);
    errorDiv.classList.remove("d-none");
    errorDiv.innerHTML += `<div>${message}</div>`;
}

function clearAllReviewErrors() {
    const fields = ["review-image", "review-text", "review-stars", "review-author", "review-year"];
    fields.forEach(id => {
        const field = document.getElementById(id);
        field.classList.remove("is-invalid");
    });
    const errorDivs = document.querySelectorAll("[id^='review-'][id$='-errors']");
    errorDivs.forEach(div => {
        div.classList.add("d-none");
        div.innerHTML = "";
    });
}

function deleteReview(button) {
    if (confirm("¿Estás seguro de que deseas eliminar esta reseña?")) {
        const row = button.closest("tr");
        row.remove();
    }
}
