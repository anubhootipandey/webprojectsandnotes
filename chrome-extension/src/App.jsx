import React, { useState, useEffect } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import ListItem from './components/ListItem';
import './App.css';

function App() {
  const [myLeads, setMyLeads] = useState([]);

  useEffect(() => {
    const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));
    if (leadsFromLocalStorage) {
      setMyLeads(leadsFromLocalStorage);
    }
  }, []);

  const saveInput = (inputValue) => {
    setMyLeads([...myLeads, inputValue]);
    localStorage.setItem('myLeads', JSON.stringify([...myLeads, inputValue]));
  };

  const saveTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setMyLeads([...myLeads, tabs[0].url]);
      localStorage.setItem('myLeads', JSON.stringify([...myLeads, tabs[0].url]));
    });
  };

  const deleteAll = () => {
    localStorage.clear();
    setMyLeads([]);
  };

  return (
    <div>
      <h1>CHROME EXTENSION</h1>
      <Input onSaveInput={saveInput} />
      <Button onClick={saveTab} >SAVE TAB</Button>
      <Button onClick={deleteAll}>DELETE ALL</Button>
      <ul>
        {myLeads.map((lead, index) => (
          <ListItem key={index} lead={lead}  />
        ))}
      </ul>
    </div>
  );
}

export default App;
