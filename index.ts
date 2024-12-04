import inquirer from "inquirer";

// Utils

function customLog(str: string): void {
    console.log(str + "\n");
}

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const greetingMessage: string =
    "Welcome to the Number Guessing Game!\n" +
    "I'm thinking of a number between 1 and 100.\n" +
    "You have 5 chances to guess the correct number.";

function difficultyLevelValidator(value: number | undefined): string | boolean {
    if (value) {
        if (![1, 2, 3].includes(value)) return "value must be in [1, 2, 3]";
        return true;
    }
    return "value not found";
}

function guessValidator(value: number | undefined): string | boolean {
    if (value) {
        if (value < 1 || value > 100) {
            return "value must be in [1 - 100])";
        }
        return true;
    }
    return "value not found";
}

const difficultyLevelMessage: string =
    "Please select the difficulty level:\n" +
    "1: Easy (10 chances)\n" +
    "2: Medium (5 chances)\n" +
    "3: Hard (3 chances)";

const difficultyLevelArray: string[] = ["Easy", "Medium", "Hard"];
const difficultyLevelValues: number[] = [10, 5, 3];

type difficultyLevelType = 1 | 2 | 3;

// Init

customLog(greetingMessage);
customLog(difficultyLevelMessage);

const difficulty: difficultyLevelType = (
    await inquirer.prompt({
        type: "number",
        name: "difficulty",
        message: "Enter your choice:",
        validate: difficultyLevelValidator,
    })
).difficulty;

customLog(
    `Great! You have selected the ${
        difficultyLevelArray[difficulty - 1]
    } difficulty level.`
);

customLog("Let's start the game!");

// Game

let play: boolean = true;
let playQuestion: string;

let hidden: number;
let attemptsAvailable: number;
let attemptsMade: number;
let guess: number;

let startTime: number;
let endTime: number;

while (play) {
    startTime = Date.now();

    hidden = randomIntFromInterval(1, 100);
    attemptsAvailable = difficultyLevelValues[difficulty - 1];
    attemptsMade = 0;
    guess = 0;

    // console.log(hidden); // for testing

    const gameResultMessage: string = await (async () => {
        while (attemptsMade < attemptsAvailable) {
            guess = (
                await inquirer.prompt({
                    type: "number",
                    name: "guess",
                    message: "Enter your guess:",
                    validate: guessValidator,
                })
            ).guess;

            attemptsMade++;

            if (guess === hidden) {
                return `Congratulations! You guessed the correct number in ${attemptsMade} attempt${
                    attemptsMade > 1 ? "s" : ""
                }.`;
            } else {
                const how: string = guess > hidden ? "less" : "greater";
                customLog(`Incorrect! The number is ${how} than ${guess}.`);
            }
        }
        return "Damn. You've run out of attempts.";
    })();

    endTime = Date.now();

    customLog(gameResultMessage);
    customLog(`Time spent: ${Math.floor((endTime - startTime) / 1000)}s`)

    playQuestion = (
        await inquirer.prompt({
            type: "list",
            name: "playQuestion",
            message: "Play another game?",
            choices: ["Yes", "No"],
        })
    ).playQuestion;

    play = playQuestion === "Yes";
}
