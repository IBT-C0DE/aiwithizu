// script.js
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = '0.3s';
        card.style.boxShadow = '0 0 25px #00c8ff';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 0 10px #003a5c';
    });
});
