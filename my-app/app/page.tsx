import React from 'react';
import '/Users/ethantam/Desktop/Calhacks/calhacksForm/my-app/app/page.css';

const NameInput = ({ nameValue, universityValue, onNameChange, onUniversityChange }) => {
  return (
    <div className="registrationForm">

      <div className="title">
        CALHACKS TIME
      </div>

      <label className="name">
        Name (First and Last):
      </label>

      <div className="input">
        <input
        type="text"
        id="name"
        name="name"
        value={nameValue}
        onChange={onNameChange}
        placeholder="Enter your Name"
      />
      </div>
      

      <label className="name">
        University: 
      </label>

      <div className="input">
        <input
                type="text"
                id="university"
                name="university"
                value={universityValue}
                onChange={onUniversityChange}
                placeholder="Enter your University"
              />
      </div>
      

      <label className="name">
        Major: 
      </label>

      <div className="input">
        <input
        type="text"
        id="university"
        name="university"
        value={universityValue}
        onChange={onUniversityChange}
        placeholder="Enter your Major"
      />
      </div>
      
      
      <label className="name">
        Graduation Date: 
      </label>

      <div className="input">
        <input
        type="text"
        id="university"
        name="university"
        value={universityValue}
        onChange={onUniversityChange}
        placeholder="Enter your Graduation Date"
      />
      </div>
      

      <label className="name">
        Gender: 
      </label>

      <div className="input">
        <input
        type="text"
        id="university"
        name="university"
        value={universityValue}
        onChange={onUniversityChange}
        placeholder="Enter your Gender"
      />
      </div>
      

      <label className="name">
        Country of Residence: 
      </label>

      <div className="input">
        <input
        type="text"
        id="university"
        name="university"
        value={universityValue}
        onChange={onUniversityChange}
        placeholder="Enter your Country of Residence"
      />
      </div>

      <label className="name">
        Essay: 
      </label>

      <div className="name">
        <input
          id="essay"
          name="essay"
          value={universityValue}
          onChange={onUniversityChange}
          placeholder="Write your essay here"
          rows={10} // Set the number of rows to define the initial height
        />
      </div>

      <div className="name">
        <input
          type="checkbox"
          id="ageCheckbox"
        />
        <span> I am 18 years or older</span>
      </div>
      
    </div>

    
  );
};


export default NameInput;