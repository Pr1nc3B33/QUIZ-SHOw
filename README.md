# JavaScript Quiz App

An interactive multiple-choice quiz built with vanilla JavaScript to test knowledge of JavaScript array methods and fundamentals.

## Features

- **10 timed questions** covering arrays, iteration methods, and core JS concepts
- **Dynamic DOM rendering** — questions and answer buttons are generated at runtime with `createElement()`
- **Instant visual feedback** — correct answers highlight green, incorrect highlight red
- **Score tracking** with a final results screen
- **Restart functionality** to retake the quiz

## Topics Covered

- Array declaration and bracket syntax
- Mutator methods: `push()`, `pop()`, `shift()`, `unshift()`
- Accessor methods: `concat()`, `indexOf()`
- Iteration methods: `map()`, `forEach()`, `filter()`, `reduce()`
- The `length` property

## Tech Stack

- HTML5
- CSS3 (Flexbox, Google Fonts)
- Vanilla JavaScript (DOM manipulation, event handling)

## Run Locally

No build step required — just open the HTML file in a browser:

```bash
# Clone the repo
git clone https://github.com/Pr1nc3B33/QUIZ-SHOw.git
cd QUIZ-SHOw/DOM_new

# Open in browser
open dom1.html
```

## How It Works

1. Questions load one at a time from a data array
2. Clicking an answer disables all buttons and shows color-coded feedback
3. The "Next Question" button advances to the next item
4. After all 10 questions, a score summary is displayed
5. The "Restart" button resets state and begins a new session
