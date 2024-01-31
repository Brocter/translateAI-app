// Chat.jsx
import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import UserChat from '../UserChat/UserChat';
import AiResponse from '../AiResponse/AiResponse';

const Chat = ({ handleClick, handleLanguageChange, language, messages }) => {
  return (
    <div className="border-[0.15rem] border-[#0D182E] rounded-md mx-[1.5rem] px-4 pt-6 h-[30rem] flex flex-col justify-between relative overflow-scroll">
      <div>
        <div className="bg-[#035A9D]  rounded-tr-[0.125rem] rounded-xl mb-6">
          <p className="font-[600] text-white text-[1.25rem] py-2 px-4">
            Select the language you want to translate into, type your text, and hit send!
          </p>
        </div>
        {messages.map((message, index) => (
          <div key={index}>
            {message.role === 'user' && <UserChat content={message.content} />}
            {message.role === 'ai' && <AiResponse content={message.content} />}
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 bg-white w-full left-0 px-4 py-6">
        <ChatBox handleClick={handleClick} />
        <LanguageSelector handleLanguageChange={handleLanguageChange} language={language} />
      </div>
    </div>
  );
};

export default Chat;
