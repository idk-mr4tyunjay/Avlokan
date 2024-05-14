import React from 'react';

const Events = () => {
  const events = [
    {
      id: 1,
      event_name: 'Photography Exhibition',
      associated_dates: '2024-05-11T18:30:00.000+00:00',
      event_date: '2024-05-09T18:30:00.000+00:00',
      description: 'Join us for an exquisite display of captivating photographs showcasing the beauty of nature, people, and culture.',
      event_type: 'Exhibition',
      club_host: '1',
      contact: 'aarav2105@example.com,9876543215',
      event_image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-wdnet-212372.jpg&fm=jpg"   // Add a placeholder image URL or the actual image URL
    },
    {
      id: 2,
      event_name: 'Photography Workshop',
      associated_dates: '2024-05-11T18:30:00.000+00:00',
      event_date: '2024-05-09T18:30:00.000+00:00',
      description: 'Calling all photography enthusiasts! Learn the basics of composition, lighting, and post-processing techniques from industry experts.',
      event_type: 'Workshop',
      club_host: '1',
      contact: 'aarav2105@example.com,9876543215',
      event_image: "https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?cs=srgb&dl=pexels-wdnet-212372.jpg&fm=jpg"   // Add a placeholder image URL or the actual image URL
    },
    {
        "id": 3,
        "event_name": "Dance Showcase",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Experience the rhythm and grace of dance at our exclusive showcase event! From classical to contemporary, our talented dancers will mesmerize you with their performances.",
        "event_type": "Showcase",
        "club_host": "2",
        "contact": "aaradhya2106@example.com,9876543216",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"

    },
    {
        "id": 4,
        "event_name": "Dance Workshop",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Get ready to groove! Our dance workshop offers a fun and energetic environment to learn new dance styles and techniques.",
        "event_type": "Workshop",
        "club_host": "2",
        "contact": "aaradhya2106@example.com,9876543216",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"

    },
    {
        "id": 5,
        "event_name": "Art Exhibition",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Explore the world of art at our exclusive exhibition! From paintings to sculptures, witness the diverse talents of our artists as they showcase their latest creations.",
        "event_type": "Exhibition",
        "club_host": "3",
        "contact": "advik2107@example.com,9876543217",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"
    },
    {
        "id": 6,
        "event_name": "Art Workshop",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Unleash your inner artist at our hands-on workshop! Learn various art techniques and create your own masterpiece under the guidance of experienced instructors. ",
        "event_type": "Workshop",
        "club_host": "3",
        "contact": "advik2107@example.com,9876543217",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"
    },
    {
        "id": 7,
        "event_name": "Singing Competition",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Are you the next singing sensation? Showcase your talent at our exciting competition! Sing your heart out and compete against other talented vocalists for the chance to win exciting prizes.",
        "event_type": "Competition",
        "club_host": "4",
        "contact": "aanya2109@example.com,9876543219",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"
    },
    {
        "id": 8,
        "event_name": "Basketball Tournament",
        "associated_dates": "2024-05-11T18:30:00.000+00:00",
        "event_date": "2024-05-09T18:30:00.000+00:00",
        "description": "Get ready to shoot some hoops at our thrilling basketball tournament! Teams from across the campus will compete in intense matches to claim victory. ",
        "event_type": "Tournament",
        "club_host": "5",
        "contact": "aarav2108@example.com,9876543218",
        event_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVDiJlkVQRqTjL309TSSN-IO1xkCVP0WdKBab4EIn9w&s"
    }
    // Add the rest of the events here
  ];

  const handleJoinEvent = (eventId) => {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSeS5vXItA1gMWY9ygDOn7zsyOHgNh2mdyZGazRLKWqOEEZctw/viewform?usp=sf_link`;
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-2 gap-4">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white rounded-lg shadow-md p-6 ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{event.event_name}</h2>
            <img src={event.event_image} alt={event.event_name} className="w-full h-60 object-cover mb-4" />
            <p className="text-gray-600 mb-1">
              <strong>Date:</strong> {event.event_date}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Time:</strong> {event.associated_dates}
            </p>
            <p className="text-gray-600 mb-1">
              <strong>Type:</strong> {event.event_type}
            </p>
            <p className="text-gray-600">
              <strong>Description:</strong> {event.description}
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
