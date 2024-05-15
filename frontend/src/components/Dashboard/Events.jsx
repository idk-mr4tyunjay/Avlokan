import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosinstance';

const Events = () => {
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const response = await axiosInstance.get("/avlokan/all-events");
      if (response.data && response.data.length > 0) { // Checking if response.data is an array and not empty
        setAllEvents(response.data);
      }
    } catch (error) {
      console.log("An unexpected error has occurred:", error);
    }
  };

  const handleJoinEvent = (eventId) => {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSeS5vXItA1gMWY9ygDOn7zsyOHgNh2mdyZGazRLKWqOEEZctw/viewform?usp=sf_link`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-2 gap-4">
        {allEvents.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white rounded-lg shadow-md p-6 ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{event.event_name}</h2>
            <img src={event.event_image} alt={event.event_name} className="w-full h-60 object-cover mb-4" />
            <p className="text-gray-600 mb-1">
              <strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Time:</strong> {new Date(event.associated_dates).toLocaleTimeString()}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Type:</strong> {event.event_type}
            </p>
            <p className="text-gray-600">
              <strong>Description:</strong> {event.description}
            </p>
            <p className="text-gray-600">
              <strong>Contact:</strong> {event.contact}
            </p>
            <button
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleJoinEvent(event.id)}
            >
              Join Event
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
