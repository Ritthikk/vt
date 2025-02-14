let noButtonDodgeCount = 0;
const maxDodges = 5;

function nextQuestion(accepted, questionNumber) {
    if (accepted) {
        document.querySelector(`#q${questionNumber}`).classList.remove('active');
        if (questionNumber < 3) {
            document.querySelector(`#q${questionNumber + 1}`).classList.add('active');
        } else {
            document.querySelector('#final').classList.add('active');
            celebrateAcceptance();
        }
    }
}

function handleNo() {
    if (noButtonDodgeCount >= maxDodges) {
        document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
        document.querySelector('#rejected').classList.add('active');
        document.querySelector('.heart').style.display = 'none';
    }
}

function dodgeNo() {
    if (noButtonDodgeCount < maxDodges) {
        const btn = document.querySelector('.btn.no');
        btn.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 100 - 50}px)`;
        noButtonDodgeCount++;
    }
}

function resetQuestions() {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelector('#q1').classList.add('active');
    noButtonDodgeCount = 0;
    const noBtn = document.querySelector('.btn.no');
    noBtn.style.transform = 'none';
}

function celebrateAcceptance() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 15; i++) {
        createHeart(container);
    }
}

function createHeart(container) {
    const heart = document.createElement("div");
    heart.classList.add("heart-animation");
    heart.style.left = Math.random() * 100 + '%';
    container.appendChild(heart);
    
    setTimeout(() => {
        container.removeChild(heart);
    }, 4000);
}
