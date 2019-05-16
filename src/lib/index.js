import random from 'lodash/random';

export const getPrompt = prompts => {
    const prompt = prompts[random(prompts.length - 1)];
    console.log(prompt);
    return prompt;
};
