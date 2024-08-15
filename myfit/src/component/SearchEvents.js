// SearchEvents.js
import React, { useState } from 'react';

const SearchEvents = () => {
  const [location, setLocation] = useState('');
  const [events, setEvents] = useState([]);

  const handleSearch = () => {
    // Fetch events based on location (mocked data for now)
    const mockEvents = [
      { id: 1, name: 'Marathon 1', location: 'New York', date: '2023-08-01' },
      { id: 2, name: 'Marathon 2', location: 'Los Angeles', date: '2023-09-10' },
    ];
    setEvents(mockEvents.filter(event => event.location.toLowerCase().includes(location.toLowerCase())));
  };

  return (
    <div style={{ padding: '1em' }}>
      <h1>Upcoming Events</h1>
      <div style={{ marginBottom: '1em' }}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: '0.5em', marginRight: '1em' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5em 1em' }}>Search</button>
      </div>
      <div>
        {events.map(event => (
          <div key={event.id} style={{ marginBottom: '1em', padding: '1em', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>{event.name}</h2>
            <p>{event.location} - {event.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchEvents;
