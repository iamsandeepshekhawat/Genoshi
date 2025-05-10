import { getRandomResponse } from './chatUtils';

// Sample responses for different types of user inputs
const greetings = [
  "Hello! How can I assist you today?",
  "Hi there! I'm Bolt, your AI assistant. What can I help you with?",
  "Greetings! How may I be of service?",
  "Hello! I'm here to help. What do you need assistance with?"
];

const questions = [
  "That's an interesting question. Based on my knowledge, I would say that depends on several factors.",
  "Great question! I've analyzed this topic extensively and can provide some insights.",
  "I'm happy to help with that question. Let me provide some information that might be useful.",
  "I've researched this topic and can share what I've learned with you."
];

const thanks = [
  "You're welcome! Is there anything else I can help with?",
  "Happy to help! Let me know if you need anything else.",
  "It's my pleasure to assist. Anything else on your mind?",
  "Glad I could help! Feel free to ask if you have more questions."
];

const fallbacks = [
  "I understand what you're saying. Let me think about the best way to help you with that.",
  "That's an interesting point. I'd be happy to discuss this further.",
  "I'm processing what you've shared. Is there a specific aspect you'd like me to focus on?",
  "Thanks for sharing that. How else can I assist you today?"
];

// Determine which type of response to use based on user input
export const getBotResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  if (lowerCaseMessage.match(/^(hi|hello|hey|greetings).*/i)) {
    return getRandomResponse(greetings);
  } 
  else if (lowerCaseMessage.match(/^(thanks|thank you|thx).*/i)) {
    return getRandomResponse(thanks);
  }
  else if (lowerCaseMessage.includes('?')) {
    return getRandomResponse(questions);
  } 
  else {
    return getRandomResponse(fallbacks);
  }
};