# Number Guessing Game

https://roadmap.sh/projects/number-guessing-game


Welcome to the **Number Guessing Game**! This interactive console-based game challenges you to guess a randomly selected number within a specific range and number of attempts, depending on your chosen difficulty level.

## Features
- **Difficulty Levels:** Choose from Easy, Medium, or Hard with varying attempts.
- **Interactive Input:** Uses [Inquirer.js](https://www.npmjs.com/package/inquirer) for smooth user interaction.
- **Debug Mode:** Optional mode to display the hidden number for testing.
- **Play Again Option:** Replay the game as many times as you'd like.

## Installation

To set up and play the game locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Maxrosoft/number-guessing-game.git
   cd number-guessing-game
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file to enable debug mode if needed:
   ```bash
   DEBUG=true
   ```

4. Run the game:
   ```bash
   npm start
   ```

## Gameplay Instructions

1. **Launch the Game**:
   When you run the game, you'll be greeted with a welcome message.

2. **Choose a Difficulty**:
   Select a difficulty level:
   - Easy: 10 chances
   - Medium: 5 chances
   - Hard: 3 chances

3. **Guess the Number**:
   Enter your guesses and receive feedback on whether the hidden number is greater or less than your guess.

4. **Win or Lose**:
   - Win: Guess the correct number within the allowed attempts.
   - Lose: Exhaust all attempts without guessing the correct number.

5. **Play Again**:
   Decide whether to play another round or exit the game.

## Debug Mode

Enable debug mode by setting `DEBUG=true` in a `.env` file. This will reveal the hidden number during gameplay for testing purposes.

## Example Run

```
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 5 chances to guess the correct number.

Please select the difficulty level:
1: Easy (10 chances)
2: Medium (5 chances)
3: Hard (3 chances)
Enter your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.
Enter your guess: 25
Incorrect! The number is greater than 25.
Enter your guess: 30
Congratulations! You guessed the correct number in 3 attempts.
Time spent: 25s
Play another game? [Yes/No]
```

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Inquirer.js](https://www.npmjs.com/package/inquirer)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Contributing

Contributions are welcome! Feel free to open issues or create pull requests to improve the project.

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

Enjoy the game and happy guessing!
