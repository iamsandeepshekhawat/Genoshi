export interface MessageType {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status: 'sending' | 'sent' | 'delivered' | 'read' | 'failed';
}