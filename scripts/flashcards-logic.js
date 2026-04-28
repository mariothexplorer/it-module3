document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');

    const cardContainer = document.getElementById('flashcard-container');
    const questionEl = document.getElementById('question');
    const answerEl = document.getElementById('answer');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressEl = document.getElementById('progress');
    const titleEl = document.getElementById('topic-title');

    if (!topic || !FLASHCARDS_DATA[topic]) {
        cardContainer.innerHTML = '<p>Няма налични флашкарти за тази тема.</p>';
        return;
    }

    const cards = FLASHCARDS_DATA[topic];
    let currentIndex = 0;
    let isFlipped = false;

    const topicTitleParam = urlParams.get('title');

    // Set title based on URL parameter or fallback to FLASHCARDS_TITLES
    const baseTitle = topicTitleParam || FLASHCARDS_TITLES[topic] || topic;
    titleEl.textContent = `${baseTitle}. Флашкарти`;

    function updateCard() {
        const card = cards[currentIndex];
        questionEl.textContent = card.question;
        answerEl.innerHTML = card.answer;
        progressEl.textContent = `Карта ${currentIndex + 1} от ${cards.length}`;

        // Reset flip state
        isFlipped = false;
        document.querySelector('.flashcard').classList.remove('flipped');

        // Update buttons
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === cards.length - 1;
    }

    document.querySelector('.flashcard').addEventListener('click', () => {
        isFlipped = !isFlipped;
        document.querySelector('.flashcard').classList.toggle('flipped');
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
            updateCard();
        }
    });

    updateCard();
});
