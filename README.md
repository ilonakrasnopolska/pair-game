### Pair Matching Game

This is a simple pair-matching game created using HTML, CSS, and JavaScript. This game allows you to choose the number of cards (from 2 to 16, only even numbers are allowed) for gameplay. Once selected, you can start the game, and a timer with a duration of 1 minute will begin.

#### How to Play

1. **Select the Number of Cards**
   - Use the form to choose the number of cards for the game (only even numbers from 2 to 16 are allowed).

2. **Start the Game**
   - Click the "Start Game" button to initiate gameplay.

3. **Gameplay Process**
   - Click on the cards to reveal them. The objective is to find pairs of identical cards.
   - When two cards are selected, they will either remain open if they match or close again if they do not.

4. **Timer**
   - A timer with a duration of 1 minute begins when the game starts. If you manage to uncover all pairs before the time runs out, you win.
   - If the timer reaches the 1-minute mark and you haven't uncovered all pairs, the game ends, and a notification about the game's end will appear.

5. **Game Status**
   - Throughout the game, the button text will change, indicating different stages: start of the game, gameplay, victory, or game over.

#### How the Game Works

- Bootstrap classes (row and col) are used in the game for card layout.
- The cards are created from arrays of images and numbers. Numbers are randomly generated and shuffled using functions.
- Card colors change upon selection, and they are opened and closed by toggling classes on click events.

#### Running the Game Locally

1. Clone this repository.
2. Open the `index.html` file in your browser.
3. Choose the number of cards and start playing!

Feel free to explore and modify the code to enhance the gaming experience! Enjoy the game!
