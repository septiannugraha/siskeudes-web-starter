'use client';

import { useState, useEffect } from 'react';

export default function OfflineStorage() {
  const [message, setMessage] = useState('');
  const [savedMessages, setSavedMessages] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('messages');
    if (stored) setSavedMessages(JSON.parse(stored));
  }, []);

  const saveMessage = () => {
    if (message) {
      const newMessages = [...savedMessages, message];
      setSavedMessages(newMessages);
      localStorage.setItem('messages', JSON.stringify(newMessages));
      setMessage('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Offline Storage</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter a message"
          className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={saveMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </div>
      <ul className="space-y-2">
        {savedMessages.map((msg, index) => (
          <li key={index} className="p-2 bg-gray-100 rounded-md">{msg}</li>
        ))}
      </ul>
    </div>
  );
}
