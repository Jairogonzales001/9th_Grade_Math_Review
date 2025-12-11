// Answer key for all questions
const answers = {
    // Topic 1: Logic & Conditional Statements
    '1-1': { correct: 'c', explanation: 'The contrapositive swaps and negates: "If NOT q, then NOT p." So: "If a triangle does not have three congruent sides, then it is not equilateral."' },
    '1-2': { correct: 'b', explanation: 'The inverse negates both parts: "If NOT p, then NOT q." So: "If x ≠ 5, then x + 3 ≠ 8."' },
    '1-3': { correct: 'c', explanation: 'When both a conditional statement (p → q) AND its converse (q → p) are true, you can write a biconditional: "p if and only if q."' },
    '1-4': { correct: 'b', explanation: '2 is a prime number (only divisible by 1 and itself) and is even, not odd. This disproves the statement "All prime numbers are odd."' },
    '1-5': { correct: 'c', explanation: 'A statement and its contrapositive are logically equivalent. If one is true, the other must be true. The converse and inverse are NOT guaranteed to be true.' },

    // Topic 2: Mathematical Proofs
    '2-1': { correct: 'b', explanation: 'The "Reasons" column must contain definitions, postulates, theorems, or "Given" - mathematical justifications for each statement.' },
    '2-2': { correct: 'c', explanation: 'Transitive Property: If a = b and b = c, then a = c. Here, AB = CD and CD = EF, so AB = EF.' },
    '2-3': { correct: 'b', explanation: 'In a proof by contradiction (indirect proof), you assume the opposite of what you want to prove, then show this leads to a contradiction.' },
    '2-4': { correct: 'c', explanation: 'Vertical Angles Theorem: Vertical angles are congruent (equal in measure). They are NOT supplementary or complementary.' },
    '2-5': { correct: 'a', explanation: 'Reflexive Property: Any segment or angle is congruent to itself. AB ≅ AB, or ∠A ≅ ∠A.' },

    // Topic 3: Lines & Angles
    '3-1': { correct: 'b', explanation: 'Corresponding angles are CONGRUENT when formed by parallel lines and a transversal. If ∠1 = 65°, its corresponding angle also = 65°.' },
    '3-2': { correct: 'a', explanation: 'Consecutive interior angles are SUPPLEMENTARY (sum to 180°). So: (3x + 10) + (2x + 20) = 180 → 5x + 30 = 180 → 5x = 150 → x = 30.' },
    '3-3': { correct: 'c', explanation: 'Consecutive interior angles (also called same-side interior or co-interior angles) are SUPPLEMENTARY (sum to 180°). All other pairs listed are congruent.' },
    '3-4': { correct: 'b', explanation: 'Converse of Alternate Interior Angles Theorem: If alternate interior angles are congruent, then the lines are parallel.' },
    '3-5': { correct: 'b', explanation: 'Perpendicular Bisector Theorem: Any point on the perpendicular bisector of a segment is equidistant from the endpoints. So MA = MB.' },

    // Topic 4: Transformations
    '4-1': { correct: 'a', explanation: 'Reflection over the y-axis: (x, y) → (-x, y). So A(3, -2) → A\'(-3, -2). Only the x-coordinate changes sign.' },
    '4-2': { correct: 'a', explanation: '90° counterclockwise rotation about origin: (x, y) → (-y, x). So B(4, 1) → B\'(-1, 4).' },
    '4-3': { correct: 'd', explanation: 'Dilation is a NON-RIGID transformation - it changes the size of figures (does not preserve distance). Reflections, rotations, and translations are rigid.' },
    '4-4': { correct: 'b', explanation: 'Original AB length: |4 - 1| = 3 units. After dilation with scale factor 2, all lengths are multiplied by 2: A\'B\' = 3 × 2 = 6 units.' },
    '4-5': { correct: 'c', explanation: '180° rotation about origin: (x, y) → (-x, -y). So P(-2, 5) → P\'(2, -5). Both coordinates change signs.' },

    // Topic 5: Triangle Theorems & Congruence
    '5-1': { correct: 'b', explanation: 'Triangle angles sum to 180°. m∠C = 180° - 45° - 70° = 65°.' },
    '5-2': { correct: 'c', explanation: 'Triangle Inequality: Any two sides must sum to more than the third. 6 + 8 = 14 > 10, 6 + 10 = 16 > 8, 8 + 10 = 18 > 6. All pass!' },
    '5-3': { correct: 'b', explanation: 'AA Similarity: Two triangles with two pairs of congruent angles are SIMILAR (same shape, possibly different size). Not necessarily congruent.' },
    '5-4': { correct: 'b', explanation: 'HL (Hypotenuse-Leg) Theorem: For RIGHT triangles, if the hypotenuse and one leg are congruent, the triangles are congruent.' },
    '5-5': { correct: 'b', explanation: 'In an isosceles triangle, base angles are equal. Let each base angle = x. Then: 50 + x + x = 180 → 50 + 2x = 180 → 2x = 130 → x = 65°.' },

    // Topic 6: Coordinate Geometry
    '6-1': { correct: 'a', explanation: 'Distance = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5.' },
    '6-2': { correct: 'b', explanation: 'Midpoint = ((-2 + 6)/2, (5 + (-1))/2) = (4/2, 4/2) = (2, 2).' },
    '6-3': { correct: 'd', explanation: 'Perpendicular lines have slopes that are negative reciprocals. The negative reciprocal of 2/3 is -3/2.' },
    '6-4': { correct: 'b', explanation: 'PR = √[(2-0)² + (3-0)²] = √13. QR = √[(4-2)² + (0-3)²] = √13. Since PR = QR, it\'s isosceles.' },
    '6-5': { correct: 'b', explanation: 'Perpendicular lines have slopes whose product = -1. Check: 4 × (-1/4) = -1. Yes, they are perpendicular!' }
};

// Track current topic
let currentTopic = 1;
const totalTopics = 7;

// Track scores by topic
let topicScores = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
};

// Track if quiz has been submitted
let quizSubmitted = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers to topic dots
    document.querySelectorAll('.topic-dot').forEach(dot => {
        dot.addEventListener('click', function() {
            const topic = parseInt(this.dataset.topic);
            if (topic && !quizSubmitted) {
                goToTopic(topic);
            } else if (quizSubmitted) {
                goToTopic(topic);
            }
        });
    });

    // Add change handlers to all radio buttons for immediate feedback
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (!quizSubmitted) {
                const questionId = this.name.replace('q', '');
                checkAnswer(questionId, this.value);
            }
        });
    });

    updateProgress();
});

// Navigate to a specific topic
function goToTopic(topicNum) {
    // Hide all topics
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.remove('active');
    });

    // Show selected topic
    document.getElementById('topic' + topicNum).classList.add('active');

    // Update navigation dots
    document.querySelectorAll('.topic-dot').forEach(dot => {
        dot.classList.remove('active');
        if (parseInt(dot.dataset.topic) === topicNum) {
            dot.classList.add('active');
        }
    });

    currentTopic = topicNum;
    updateProgress();
}

// Navigate to next topic
function nextTopic() {
    if (currentTopic < totalTopics) {
        goToTopic(currentTopic + 1);
    }
}

// Navigate to previous topic
function prevTopic() {
    if (currentTopic > 1) {
        goToTopic(currentTopic - 1);
    }
}

// Check individual answer and provide feedback
function checkAnswer(questionId, selectedValue) {
    const answer = answers[questionId];
    if (!answer) return;

    const feedbackEl = document.getElementById('feedback-' + questionId);
    const questionBlock = document.querySelector(`[data-question="${questionId}"]`);
    const options = questionBlock.querySelectorAll('.option');

    // Reset option styling
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct-answer', 'wrong-answer');
    });

    // Mark selected option
    const selectedOption = questionBlock.querySelector(`input[value="${selectedValue}"]`).parentElement;
    selectedOption.classList.add('selected');

    if (selectedValue === answer.correct) {
        feedbackEl.textContent = '✓ Correct! ' + answer.explanation;
        feedbackEl.className = 'feedback show correct';
        questionBlock.classList.remove('incorrect');
        questionBlock.classList.add('correct');
        selectedOption.classList.add('correct-answer');
    } else {
        feedbackEl.textContent = '✗ Not quite. ' + answer.explanation;
        feedbackEl.className = 'feedback show incorrect';
        questionBlock.classList.remove('correct');
        questionBlock.classList.add('incorrect');
        selectedOption.classList.add('wrong-answer');

        // Also show the correct answer
        const correctOption = questionBlock.querySelector(`input[value="${answer.correct}"]`).parentElement;
        correctOption.classList.add('correct-answer');
    }
}

// Submit the entire quiz
function submitQuiz() {
    quizSubmitted = true;

    // Calculate scores for each topic
    for (let topic = 1; topic <= 6; topic++) {
        topicScores[topic] = 0;
        for (let q = 1; q <= 5; q++) {
            const questionId = `${topic}-${q}`;
            const selectedInput = document.querySelector(`input[name="q${questionId}"]:checked`);

            if (selectedInput && selectedInput.value === answers[questionId].correct) {
                topicScores[topic]++;
            }

            // Make sure feedback is shown for all questions
            if (selectedInput) {
                checkAnswer(questionId, selectedInput.value);
            }
        }
    }

    // Calculate total score
    const totalScore = Object.values(topicScores).reduce((a, b) => a + b, 0);
    const percentage = Math.round((totalScore / 30) * 100);

    // Update results page
    document.getElementById('totalScore').textContent = totalScore;
    document.getElementById('scorePercent').textContent = percentage + '%';

    // Update topic bars
    for (let topic = 1; topic <= 6; topic++) {
        const score = topicScores[topic];
        const bar = document.getElementById('bar-topic' + topic);
        const text = document.getElementById('score-topic' + topic);

        bar.style.width = (score / 5 * 100) + '%';
        text.textContent = score + '/5';

        // Color the bar based on score
        if (score >= 4) {
            bar.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
        } else if (score >= 3) {
            bar.style.background = 'linear-gradient(90deg, #ff9800, #ffc107)';
        } else {
            bar.style.background = 'linear-gradient(90deg, #f44336, #ff5722)';
        }
    }

    // Generate recommendations
    const recommendations = document.getElementById('recommendations');
    const weakTopics = [];
    const topicNames = {
        1: 'Logic & Conditional Statements',
        2: 'Mathematical Proofs',
        3: 'Lines & Angles',
        4: 'Transformations',
        5: 'Triangles & Congruence',
        6: 'Coordinate Geometry'
    };

    for (let topic = 1; topic <= 6; topic++) {
        if (topicScores[topic] < 4) {
            weakTopics.push(topicNames[topic]);
        }
    }

    if (weakTopics.length === 0) {
        recommendations.className = 'recommendations perfect';
        recommendations.innerHTML = `
            <h4>Excellent Work!</h4>
            <p>You've demonstrated mastery across all geometry topics! You're well-prepared for what's ahead.</p>
        `;
    } else {
        recommendations.innerHTML = `
            <h4>Areas to Review</h4>
            <p>Consider reviewing these topics before moving on:</p>
            <ul>
                ${weakTopics.map(topic => `<li>${topic}</li>`).join('')}
            </ul>
        `;
    }

    // Mark topic dots as completed based on scores
    document.querySelectorAll('.topic-dot').forEach(dot => {
        const topic = parseInt(dot.dataset.topic);
        if (topic && topic <= 6 && topicScores[topic] >= 4) {
            dot.classList.add('completed');
        }
    });

    // Go to results page
    goToTopic(7);
    updateProgress();
}

// Retry the quiz
function retryQuiz() {
    quizSubmitted = false;

    // Reset all scores
    for (let topic = 1; topic <= 6; topic++) {
        topicScores[topic] = 0;
    }

    // Clear all selections and feedback
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });

    document.querySelectorAll('.feedback').forEach(feedback => {
        feedback.className = 'feedback';
        feedback.textContent = '';
    });

    document.querySelectorAll('.question-block').forEach(block => {
        block.classList.remove('correct', 'incorrect');
    });

    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct-answer', 'wrong-answer');
    });

    document.querySelectorAll('.topic-dot').forEach(dot => {
        dot.classList.remove('completed');
    });

    // Go back to first topic
    goToTopic(1);
    updateProgress();
}

// Update progress bar
function updateProgress() {
    let answeredCount = 0;

    for (let topic = 1; topic <= 6; topic++) {
        for (let q = 1; q <= 5; q++) {
            const questionId = `${topic}-${q}`;
            const selectedInput = document.querySelector(`input[name="q${questionId}"]:checked`);
            if (selectedInput) {
                answeredCount++;
            }
        }
    }

    const percentage = Math.round((answeredCount / 30) * 100);
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage + '%';
}

// Add change listener to update progress when answers are selected
document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', updateProgress);
});
