import React from 'react';

function ListItem({ lead }) {
  const handleClick = () => {
    // Open a new tab with the link
    window.open(lead, '_blank');
    // Optionally, you can send a message to the new tab to show some content
    // For example, you can use chrome.tabs.sendMessage() if you're in a Chrome extension
    // chrome.tabs.sendMessage(tabId, { message: 'showContent' });
    chrome.tabs.sendMessage(tabId, { message: 'showContent' });
  };

  return (
    <li>
      <a href={lead} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        {lead}
      </a>
    </li>
  );
}

export default ListItem;
