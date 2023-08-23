import React, { useState } from 'react';
import './Input.css'

function Input() {
  const [inputValue, setInputValue] = useState('');
  const [previewValue, setPreviewValue] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePreviewClick = () => {
    setPreviewValue(inputValue);
    setShowPreview(true);
  };

  const handleClearPreview = () => {
    setInputValue('');
    setPreviewValue('');
    setShowPreview(false);
  };

  return (
    <div className='text-center p-3 input mb-5 d-flex justify-content-center'>
      <input  type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter Your Ideas"
      input/>
      <div>
      <button className='Pre-btn' onClick={handlePreviewClick}><i class="fa-solid fa-caret-right"></i></button>
      </div>
      {/* <button onClick={handleClearPreview}>Clear</button> */}
      {/* {showPreview && <p className='border border-dark preview-box'>{previewValue}</p>} */}
    </div>
  );
}

export default Input;
