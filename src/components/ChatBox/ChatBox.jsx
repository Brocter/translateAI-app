import React, { useState, useRef } from 'react';

const ChatBox = ({ handleClick }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() !== '') {
      handleClick(input);
      setInput(''); // Reset the input state
      inputRef.current.value = ''; // Clear the input field
    }
  };

  return (
    <div className="bg-[#F5F5F5] flex justify-between py-[1.33rem] px-[1rem] rounded-lg border-[1.5px] border-[#586E88]">
      <input
        ref={inputRef}
        className="bg-transparent w-full ring-transparent outline-transparent focus:outline-none text-[#333]"
        type="text"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M4.53199 13.3943L1.99992 24.7887L24.7886 13.3943L1.99992 2L4.53199 13.3943ZM4.53199 13.3943L14.6603 13.3943" stroke="#32CD32" strokeWidth="2.53207" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ChatBox;

