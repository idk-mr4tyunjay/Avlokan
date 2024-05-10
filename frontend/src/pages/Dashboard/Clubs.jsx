import React from 'react';

const Clubs = () => {
  const clubs = [
    {
      club_id: 1,
      club_name: 'Amogh Photography',
      created_by_user: '2100',
      created_data: '2024-05-09T18:30:00.000+00:00',
      club_type: 'Photography',
      current_president: '2105',
      members: 2,
      events: '2',
      club_image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      club_id: 2,
      club_name: 'Natraj Dancing',
      created_by_user: '2101',
      created_data: '2024-05-09T18:30:00.000+00:00',
      club_type: 'Dancing',
      current_president: '2106',
      members: 2,
      events: '2',
      club_image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        "club_id": 3,
        "club_name": "Kalakriti Arts",
        "created_by_user": "2102",
        "created_data": "2024-05-09T18:30:00.000+00:00",
        "club_type": "Arts",
        "current_president": "2107",
        "members": 2,
        "events": "2",
        "club_image": "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "club_id": 4,
        "club_name": "Swar Sangam Singing Club",
        "created_by_user": "2103",
        "created_data": "2024-05-09T18:30:00.000+00:00",
        "club_type": "Singing",
        "current_president": "2108",
        "members": 2,
        "events": "2",
        "club_image": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        "club_id": 5,
        "club_name": "Basketball Blazers",
        "created_by_user": "2104",
        "created_data": "2024-05-09T18:30:00.000+00:00",
        "club_type": "Basketball",
        "current_president": "2109",
        "members": 2,
        "events": "2",
        "club_image": "https://images.unsplash.com/photo-1616003618448-2914895212ba?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    // Add the rest of the clubs here
  ];
  const handleJoinEvent = (eventId) => {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSc7I7Mzz4iv3ftU1RK7SPqFG5tVfIFKqtBMzjzfkKFffARpPg/viewform?usp=sf_link`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Clubs</h1>
      <div className="grid grid-cols-2 gap-4">
        {clubs.map((club) => (
          <div key={club.club_id} className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-2">{club.club_name}</h2>
            <img src={club.club_image} alt={club.club_name} className="w-full h-60 object-cover mb-4" />
            <p className="text-gray-600 mb-2">Type: {club.club_type}</p>
            <p className="text-gray-600 mb-2">Members: {club.members}</p>
            <p className="text-gray-600 mb-4">Events: {club.events}</p>
            <div className="flex justify-end">
            <button
              className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => handleJoinEvent(event.id)}
            >                Join Club
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
