// App.jsx
import React, { useEffect, useState } from 'react';
import OpenAI from 'openai';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';

function App() {
  const [language, setLanguage] = useState('France');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [aiResponse, setAiResponse] = useState('');

  const handleLanguageChange = (flag) => {
    if (flag === 'Spain') return setLanguage('Spain');
    if (flag === 'France') return setLanguage('France');
    if (flag === 'Japan') return setLanguage('Japan');
  };

 
      
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPEN_AI_KEY,
    dangerouslyAllowBrowser: true,
   });
   
 
  const handleClick = async (i) => {
    // Create a new user message
    const userMessage = {
      role: 'user',
      content: i,
    };
    console.log(i)
    console.log(userMessage)

    // Update the list of messages with the user's input
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Create a message for OpenAI
    const openaiMessage = {
      role: 'system',
      content: `You are a translator from English to ${language}. Just respond with the exact message translated from English to ${language}.`,
    };

    // Send messages to OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [openaiMessage, userMessage],
    });

    // Update the list of messages with the AI's response
    const aiMessage = {
      role: 'ai',
      content: response.choices[0].message.content,
    };
    setMessages((prevMessages) => [...prevMessages, aiMessage]);

    // Set AI response for display
    setAiResponse(aiMessage.content);
  };

  return (
    <div className='max-w-[28rem] bg-white mx-auto rounded-md font-poppins'>
      <Header />
      <div className='py-8'>
        <Chat
          language={language}
          handleClick={handleClick}
          handleLanguageChange={handleLanguageChange}
          aiResponse={aiResponse}
          input={input}
          messages={messages}
        />
      </div>
    </div>
  );
}

export default App;
