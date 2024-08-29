import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg text-yellow-400 font-semibold ">{title}</h2>
        {isOpen ? (
          <FaChevronUp className="text-yellow-400" />
        ) : (
          <FaChevronDown className="text-yellow-400" />
        )}
      </div>
      {isOpen && (
        <div className="p-4 text-gray-200">
          <p>{content}</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Read More
          </a>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-full ml-8 mr-8 mb-4  mx-auto">
      <AccordionItem
        title="WHY CHOOSE US?"
        className=""
        content="This is the content for the first 
        accordion item. It will be revealed when the item is expanded."
      />
      <AccordionItem
        title="POPULAR CATEGORIES"
        className="text-yellow-400"
        content="This is the content for the second 
        accordion item. It will be revealed when the item is expanded."
      />
    </div>
  );
};

export default Accordion;
