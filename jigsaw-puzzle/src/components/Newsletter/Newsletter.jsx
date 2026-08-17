import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the name and email to your backend or do something else with the data
    // For this example, we'll just show a message that the user has subscribed
    setSubscribed(true);
  };

  return (
    <div className="newsletter">
      <h1>Newsletter Signup</h1>
      {subscribed ? (
        <div>
          <p>Thank you for subscribing!</p>
          <p>Your email address: {email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default Newsletter;
