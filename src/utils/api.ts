import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export const fetchBotResponse = async (userMessage: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, 
      {
        model: "llama3-8b-8192",
        messages: [
          {
            role: "user",
            content: userMessage
          }
        ],
        temperature: 0.7,
        max_tokens: 2048
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error fetching bot response:', error);
    return getDummyResponse(userMessage);
  }
};

const getDummyResponse = (userMessage: string): string => {
  const lowerCase = userMessage.toLowerCase();
  
  if (lowerCase.includes('hello') || lowerCase.includes('hi')) {
    return "Hello! I'm your AI assistant. How can I help you today?";
  }
  
  if (lowerCase.includes('help')) {
    return "I'm here to help! What specific assistance do you need?";
  }
  
  if (lowerCase.includes('thank')) {
    return "You're welcome! Is there anything else you'd like to know?";
  }
  
  if (lowerCase.includes('weather')) {
    return "I'm sorry, I don't have access to real-time weather data at the moment.";
  }
  
  if (lowerCase.includes('name')) {
    return "I'm an AI assistant, you can call me Bolt!";
  }
  
  if (lowerCase.includes('how are you')) {
    return "I'm functioning well, thank you for asking! How can I assist you today?";
  }
  
  const defaultResponses = [
    "That's an interesting point. Could you tell me more?",
    "I understand. Let me help you with that.",
    "I'm processing your request. Could you provide more details?",
    "I'm here to assist. What specific information are you looking for?",
    "Let me help you understand this better.",
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};