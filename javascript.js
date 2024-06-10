// Переключение языка
function switchLanguage(language) {
    if (language === 'en') {
        document.querySelector('html').lang = 'en';
        alert('Language switched to English!');
    } else if (language === 'ru') {
        document.querySelector('html').lang = 'ru';
        alert('Язык переключен на русский!');
    }
}

// Воспроизведение звука
function playSound(type) {
    let audio;
    if (type === 'quiz_start') {
        audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    }
    audio.play();
}

// Пример добавления слушателей событий
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'blue';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '';
        });
        link.addEventListener('click', () => {
            alert(`Переход на страницу: ${link.textContent}`);
        });
    });
});
$('.carousel').carousel()
