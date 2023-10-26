import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt) {
  const randomNum = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomNum];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}
