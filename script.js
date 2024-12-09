const btn = document.querySelector('.btn-open');
const form = document.querySelector('.fact-form');

btn.addEventListener('click', function () {
    if (form.classList.contains('visually-hidden')) {
        form.classList.remove('visually-hidden');
        btn.textContent = 'Close';
    } else {
        form.classList.add('visually-hidden');
        btn.textContent = 'Share a fact';
    }
});