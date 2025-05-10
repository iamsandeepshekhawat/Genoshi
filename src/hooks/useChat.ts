import { useState, useCallback, useRef } from 'react';
import { MessageType } from '../types';
import { fetchBotResponse } from '../utils/api';

export const useChat = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messageIdCounter = useRef(0);

  const addMessage = useCallback((text: string, sender: 'user' | 'bot') => {
    const newMessage: MessageType = {
      id: `msg-${messageIdCounter.current++}`,
      text,
      sender,
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, []);

  const startConversation = useCallback(() => {
    setIsTyping(true);
    setTimeout(() => {
      addMessage("Hi there! I'm Genoshi, your AI assistant. How can I help you today?", 'bot');
      setIsTyping(false);
    }, 1500);
  }, [addMessage]);

  const sendMessage = useCallback(async (text: string) => {
    addMessage(text, 'user');
    
    setIsTyping(true);
    
    try {
      const response = await fetchBotResponse(text);
      
      const typingDelay = Math.min(Math.max(response.length * 30, 1000), 3000);
      
      setTimeout(() => {
        addMessage(response, 'bot');
        setIsTyping(false);
      }, typingDelay);
    } catch (error) {
      console.error('Error in sendMessage:', error);
      setIsTyping(false);
    }
  }, [addMessage]);

  return {
    messages,
    isTyping,
    sendMessage,
    startConversation
  };
};