document.addEventListener('DOMContentLoaded', function() {
    const quiz = [
        { question: "Какой специалист занимается лечением сердечно-сосудистых заболеваний?", answer: "b" },
        { question: "Какая из следующих услуг не предоставляется Медикером?", answer: "c" },
        { question: "Что из перечисленного является частью нашей миссии?", answer: "a" },
        { question: "Как часто рекомендуется проходить общий медицинский осмотр?", answer: "b" },
        { question: "Какое оборудование используется для диагностики заболеваний сердца?", answer: "c" }
    ];

    document.getElementById('submitQuiz').addEventListener('click', function() {
        let score = 0;
        for (let i = 0; i < quiz.length; i++) {
            const question = quiz[i];
            const selectedAnswer = document.querySelector(`input[name="q${i+1}"]:checked`);
            if (selectedAnswer && selectedAnswer.value === question.answer) {
                score++;
            }
            // Блокировка выбора ответов после отправки
            document.querySelectorAll(`input[name="q${i+1}"]`).forEach(input => {
                input.disabled = true;
            });
        }
        // Вывод результата и благодарности
        const resultContainer = document.getElementById('result');
        resultContainer.innerHTML = `<h4>Ваш результат: ${score} из ${quiz.length}</h4>`;
        if (score === quiz.length) {
            resultContainer.innerHTML += "<p>Поздравляем! Вы ответили на все вопросы верно. Благодарим за участие в викторине!</p>";
        } else {
            resultContainer.innerHTML += "<p>Жаль, но не все ответы верны. Попробуйте ещё раз!</p>";
        }
        // Скроллинг к результату
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    });
});
