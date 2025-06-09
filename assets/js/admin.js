document.addEventListener('DOMContentLoaded', () => {
    const adminSession = JSON.parse(localStorage.getItem('admin-session'));

    if (!adminSession) {
        location.href = 'login.html';
    }
})

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show');
}

function logout() {
    localStorage.removeItem('admin-session');
    location.href = 'login.html';
}