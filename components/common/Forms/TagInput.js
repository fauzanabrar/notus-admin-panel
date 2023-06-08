import { useState, useRef } from "react";

const MOCK_SUGGESSTIONS = [
  "Java",
  "Python",
  "PHP",
  "Ruby",
  "NodeJs",
  "DotNet",
  "Laravel",
];

const TagInput = ({ name, title, defaultTags = [], handleChange }) => {
  const [tags, setTags] = useState(defaultTags);
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState(MOCK_SUGGESSTIONS);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleChange(name, tags);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue) {
      event.preventDefault();
      const newTag = inputValue.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
        handleChange(name, [...tags, newTag]);
      }
      setInputValue("");
    }
  };

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter((t) => t !== tag);
    setTags(updatedTags);
  };

  const handleSuggestionClick = (suggestion) => {
    if (!tags.includes(suggestion)) {
      setTags([...tags, suggestion]);
      handleChange(name, [...tags, suggestion]); 
    }
    setInputValue("");
  };

  return (
    <div className="">
      <div className=" ">
        <label htmlFor={name} className="block font-medium mb-2">
          {title}
        </label>
        <div className="flex flex-row items-center border border-gray-300 rounded w-full py-3 px-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="flex items-center px-3 py-1 text-sm mr-1 bg-gray-300  rounded-full"
            >
              <span className="mr-1">{tag}</span>
              <button
                type="button"
                className="text-red-500"
                onClick={() => handleRemoveTag(tag)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="relative w-full">
            <input
              type="text"
              id="tags"
              className=" h-8 w-full rounded mr-2 ml-1"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {inputValue &&
            suggestions.filter((suggestion) =>
              suggestion.toLowerCase().includes(inputValue.toLowerCase())
            ).length > 0 ? (
              <ul className="absolute z-2 w-full mt-1 bg-white border border-gray-300 rounded block">
                {suggestions
                  .filter((suggestion) =>
                    suggestion.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((suggestion) => (
                    <li
                      key={suggestion}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagInput;
