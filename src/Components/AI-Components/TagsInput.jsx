import React, { useState } from 'react';

const TagInput = () => {
  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTags([...tags, input.trim()]);
      setInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-container">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Press enter to add tags"
      />
      <div className="tags-container">
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
            <span className="tag-close-icon" onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
