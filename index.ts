import inquirer from "inquirer";

function customLog(str: string, pre?: boolean): void {
    const start: string = pre ? "\n" : "";
    console.log(start + str + "\n");
    
}

const greetingMessage: string =
    "Welcome to the Number Guessing Game!\n" +
    "I'm thinking of a number between 1 and 100.\n" +
    "You have 5 chances to guess the correct number.";

function difficultyLevelValidator(value: number | undefined): string | boolean {
    if (value) {
        if (![1, 2, 3].includes(value)) return "value must be in [1, 2, 3]";
        return true
    }
    return "value not found";
}

const difficultyLevelMessage: string =
    "Please select the difficulty level:\n" +
    "1: Easy (10 chances)\n" +
    "2: Medium (5 chances)\n" +
    "3: Hard (3 chances)";

const difficultyLevelArray: string[] = ["Easy", "Medium", "Hard"];

type difficultyLevelType = 1 | 2 | 3;

// Game start

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
    } difficulty level.`, true
);

customLog("Let's start the game!");


