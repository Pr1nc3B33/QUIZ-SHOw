const quizData = [  
    {   
        question: "When creating an array what brackets do we use?",    
        options: ["()", "{}", "||", "[]"],    
        answer: 3
    },
    {   
        question: "Which method adds an element to the end of an array?",    
        options: ["pop()", "push()", "shift()", "unshift()"],    
        answer: 1
    },
    {   
        question: "What does the length property do in an array?",    
        options: ["Removes elements", "Returns the number of elements", "Sorts elements", "None of the above"],    
        answer: 1
    },
    {   
        question: "Which method removes the first element from an array?",    
        options: ["pop()", "push()", "shift()", "unshift()"],    
        answer: 2
    },
    {   
        question: "How do you access the first element of an array?",    
        options: ["array[1]", "array[0]", "array.first", "array.get(0)"],    
        answer: 1
    },
    {   
        question: "Which method combines two arrays together?",    
        options: ["merge()", "concat()", "combine()", "join()"],    
        answer: 1
    },
    {   
        question: "What does the indexOf() method return?",    
        options: ["The element at that index", "The position of an element", "A new array", "The last element"],    
        answer: 1
    },
    {   
        question: "Which method creates a new array without modifying the original?",    
        options: ["map()", "splice()", "sort()", "reverse()"],    
        answer: 0
    },
    {   
        question: "What is the correct way to declare an empty array?",    
        options: ["array = ()", "array = {}", "array = []", "array = <>"  ],    
        answer: 2
    },
    {   
        question: "Which method executes a function for each array element?",    
        options: ["map()", "forEach()", "filter()", "reduce()"],    
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion(question) {
    // Update the question text
    const questionContainer = document.querySelector('#question-container');
    questionContainer.textContent = question.question;
    
    // Get the options container
    const optionsContainer = document.querySelector('#options-container');
    optionsContainer.innerHTML = ''; // Clear existing buttons
    
    // Loop over options and create a button for each
    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    });
}

function selectOption(selectedIndex) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    
    // Check if the selected answer is correct
    if (selectedIndex === correctAnswer) {
        score++;
    }
    
    // Move to next question
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    
    // Check if quiz is complete
    if (currentQuestionIndex >= quizData.length) {
        showScore();
    } else {
        displayQuestion(quizData[currentQuestionIndex]);
    }
}

function showScore() {
    // Hide quiz section
    document.getElementById('quiz-container').classList.add('hidden');
    
    // Show score section
    document.getElementById('score-container').classList.remove('hidden');
    
    // Display the score
    document.getElementById('score-display').textContent = `${score}/${quizData.length}`;
}

function restartQuiz() {
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    
    // Hide score section
    document.getElementById('score-container').classList.add('hidden');
    
    // Show quiz section
    document.getElementById('quiz-container').classList.remove('hidden');
    
    // Display first question
    displayQuestion(quizData[currentQuestionIndex]);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(quizData[currentQuestionIndex]);
    document.getElementById('restart-button').addEventListener('click', restartQuiz);
});
