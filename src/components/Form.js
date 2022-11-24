import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        }
        else if (inputType === 'email') {
            setEmail(inputValue);
        }
        else if (inputType === 'message') {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            setErrorMsg('Name cannot be blank.');
            return;
        }
        if (!validateEmail(email)) {
            setErrorMsg('Email is not valid.');
            return;
        }
        if (!message) {
            setErrorMsg('Message cannot be blank.');
            return;
        }

        alert('Message sent!');

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={(e) => {
                if (!name) {
                    setErrorMsg('Name field is required.')
                }
            }}
            type="text"
            placeholder="name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            onBlur={(e) => {
                if (!email) {
                    setErrorMsg('Email field is required.')
                }
            }}
            type="email"
            placeholder="email"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            onBlur={(e) => {
                if (!message) {
                    setErrorMsg('Message field is required.')
                }
            }}
            type="text"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMsg && (
          <div>
            <p className="error-text">{errorMsg}</p>
          </div>
        )}
      </div>
  
    );

}

export default Form;