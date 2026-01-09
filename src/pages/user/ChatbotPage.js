import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Bot, 
  User, 
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Copy,
  Lightbulb,
  AlertCircle,
  Pill,
  MapPin,
  Clock
} from 'lucide-react';

const ChatbotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI health assistant. I can help you with:\n\n• Finding nearby pharmacies\n• General health information\n• Medicine-related questions\n• Sustainability tips\n\nHow can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedPrompts = [
    {
      icon: Pill,
      text: 'What medicine should I take for headache?',
      category: 'medicine'
    },
    {
      icon: MapPin,
      text: 'Find pharmacies near me',
      category: 'pharmacy'
    },
    {
      icon: Lightbulb,
      text: 'How can I reduce medicine waste?',
      category: 'sustainability'
    },
    {
      icon: AlertCircle,
      text: 'When should I see a doctor?',
      category: 'emergency'
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = generateBotResponse(message);
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('headache') || lowerMessage.includes('pain')) {
      return {
        id: Date.now(),
        type: 'bot',
        content: `For mild headaches, over-the-counter options like:\n\n• Paracetamol (Acetaminophen)\n• Ibuprofen\n• Aspirin\n\n⚠️ **Important:** Always consult with a healthcare professional before taking any medication, especially if you have existing health conditions or are taking other medicines.\n\nWould you like me to help you find nearby pharmacies that stock these medicines?`,
        timestamp: new Date(),
        suggestions: ['Find nearby pharmacies', 'Learn about side effects', 'When to see a doctor']
      };
    }
    
    if (lowerMessage.includes('pharmacy') || lowerMessage.includes('near me')) {
      return {
        id: Date.now(),
        type: 'bot',
        content: `I can help you find nearby pharmacies! To provide the best recommendations, I'll need:\n\n• Your current location (or allow location access)\n• The medicine you're looking for\n\nYou can also use our advanced search feature to filter by:\n• Distance\n• Availability\n• Eco-friendly rating\n\nWould you like to search for a specific medicine now?`,
        timestamp: new Date(),
        suggestions: ['Search for medicine', 'Enable location', 'Learn about eco-friendly pharmacies']
      };
    }
    
    if (lowerMessage.includes('sustainability') || lowerMessage.includes('waste')) {
      return {
        id: Date.now(),
        type: 'bot',
        content: `Great question! Here are ways to reduce medicine waste:\n\n🌱 **Prevention:**\n• Buy only what you need\n• Check expiry dates before purchase\n• Use digital prescriptions\n\n♻️ **Proper Disposal:**\n• Return unused medicines to pharmacies\n• Never flush medications down the toilet\n• Use designated disposal sites\n\n📍 **Smart Shopping:**\n• Choose nearby pharmacies\n• Buy multiple medicines in one trip\n• Check availability online first\n\nYour current eco-score is 85/100! Keep up the great work.`,
        timestamp: new Date(),
        suggestions: ['View my sustainability dashboard', 'Find eco-friendly pharmacies', 'Calculate my impact']
      };
    }
    
    if (lowerMessage.includes('emergency') || lowerMessage.includes('doctor')) {
      return {
        id: Date.now(),
        type: 'bot',
        content: `⚠️ **Medical Emergency Guidelines**\n\n**Seek immediate medical attention for:**\n• Chest pain or difficulty breathing\n• Severe bleeding\n• Loss of consciousness\n• Signs of stroke (facial drooping, arm weakness, speech difficulty)\n\n**See a doctor promptly for:**\n• High fever (>103°F/39.4°C)\n• Severe headache that doesn't improve\n• Symptoms lasting more than 3-5 days\n• Allergic reactions\n\n📞 **Emergency Services:** Call your local emergency number immediately for life-threatening situations.\n\nThis is general guidance - always consult healthcare professionals for personal medical advice.`,
        timestamp: new Date(),
        suggestions: ['Find nearby emergency services', 'Learn first aid basics', 'Book doctor appointment']
      };
    }
    
    return {
      id: Date.now(),
      type: 'bot',
      content: `I understand you're asking about: "${userMessage}"\n\nWhile I'm here to help with general health information and pharmacy locations, I should note that:\n\n• I cannot provide specific medical diagnoses\n• Always consult healthcare professionals for personal medical advice\n• For emergencies, contact your local emergency services\n\nI can help you with:\n• Finding nearby pharmacies\n• General medicine information\n• Sustainability tips\n• Health and wellness guidance\n\nCould you please rephrase your question or choose from the suggested topics below?`,
      timestamp: new Date(),
      suggestions: suggestedPrompts.map(p => p.text)
    };
  };

  const handleSuggestedPrompt = (prompt) => {
    handleSendMessage(prompt);
  };

  const handleFeedback = (messageId, feedback) => {
    // Handle feedback logic here
    console.log(`Feedback: ${feedback} for message ${messageId}`);
  };

  const copyMessage = (content) => {
    navigator.clipboard.writeText(content);
  };

  const formatMessage = (content) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < content.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-secondary-900 mb-2">
            AI Health Assistant
          </h1>
          <p className="text-secondary-600">
            Get instant help with medicine information, pharmacy locations, and sustainability tips.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-2">
            <AlertCircle className="text-warning-600 mt-0.5" size={20} />
            <div className="text-sm text-warning-800">
              <p className="font-medium mb-1">Medical Disclaimer</p>
              <p>
                This AI assistant provides general information only and is not a substitute for professional medical advice. 
                Always consult qualified healthcare professionals for medical concerns and emergencies.
              </p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="card h-[600px] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.type === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.type === 'bot' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <Bot className="text-primary-600" size={16} />
                  </div>
                )}
                
                <div
                  className={`max-w-lg px-4 py-3 rounded-lg ${
                    message.type === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-secondary-100 text-secondary-900'
                  }`}
                >
                  <div className="whitespace-pre-wrap text-sm">
                    {formatMessage(message.content)}
                  </div>
                  
                  {/* Message Actions */}
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    <div className="flex items-center space-x-2">
                      {message.type === 'bot' && (
                        <>
                          <button
                            onClick={() => handleFeedback(message.id, 'thumbsup')}
                            className="text-xs opacity-70 hover:opacity-100"
                          >
                            <ThumbsUp size={14} />
                          </button>
                          <button
                            onClick={() => handleFeedback(message.id, 'thumbsdown')}
                            className="text-xs opacity-70 hover:opacity-100"
                          >
                            <ThumbsDown size={14} />
                          </button>
                          <button
                            onClick={() => copyMessage(message.content)}
                            className="text-xs opacity-70 hover:opacity-100"
                          >
                            <Copy size={14} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  
                  {/* Suggestions */}
                  {message.suggestions && (
                    <div className="mt-3 space-y-2">
                      {message.suggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedPrompt(suggestion)}
                          className="w-full text-left px-3 py-2 text-xs bg-white bg-opacity-20 rounded hover:bg-opacity-30 transition-colors"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                {message.type === 'user' && (
                  <div className="flex-shrink-0 w-8 h-8 bg-secondary-300 rounded-full flex items-center justify-center">
                    <User className="text-secondary-600" size={16} />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Bot className="text-primary-600" size={16} />
                </div>
                <div className="bg-secondary-100 px-4 py-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-secondary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-secondary-200 p-4">
            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="mb-4">
                <p className="text-sm text-secondary-600 mb-2">Try asking:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedPrompt(prompt.text)}
                      className="flex items-center space-x-2 text-left px-3 py-2 text-sm bg-secondary-50 hover:bg-secondary-100 rounded-lg transition-colors"
                    >
                      <prompt.icon className="text-secondary-600" size={16} />
                      <span className="text-secondary-700">{prompt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputMessage)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim() || isTyping}
                className="btn btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <MessageCircle className="text-primary-600" size={24} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">24/7 Availability</h3>
            <p className="text-sm text-secondary-600">Get help anytime, anywhere with our AI assistant.</p>
          </div>
          <div className="text-center">
            <div className="bg-success-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Lightbulb className="text-success-600" size={24} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Smart Suggestions</h3>
            <p className="text-sm text-secondary-600">Receive personalized recommendations based on your needs.</p>
          </div>
          <div className="text-center">
            <div className="bg-warning-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <AlertCircle className="text-warning-600" size={24} />
            </div>
            <h3 className="font-semibold text-secondary-900 mb-2">Safety First</h3>
            <p className="text-sm text-secondary-600">Always prioritizes your health and safety with professional guidance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
