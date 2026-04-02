import { useState } from "react";
function Dropdown({ options,value,onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (option) => {
    setIsOpen(false);
    //console.log(option);
    onChange(option);
  };
  const renderItems = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  // let content = "Select...";
  // if (selection) {
  //   content = selection.label;
  // }
  return (
    <div>
      <div onClick={handleClick}>{value?.label||"Select..."}</div>
      {isOpen && <div>{renderItems}</div>}
    </div>
  );
}

export default Dropdown;
