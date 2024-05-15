import React, { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosinstance';

const Clubs = () => {
  const [allClubs, setAllClubs] = useState([]);
  
  useEffect(() => {
    getAllClubs();
  }, []);
  
  const getAllClubs = async () => {
    try {
      const response = await axiosInstance.get("/avlokan/get-clubs");
      if (response.data && response.data.length > 0) {
        setAllClubs(response.data);
      }
    } catch (error) {
      console.log("An unexpected error has occurred:", error);
    }
  };
  
  const handleJoinEvent = (clubId) => {
    window.location.href = `https://docs.google.com/forms/d/e/1FAIpQLSc7I7Mzz4iv3ftU1RK7SPqFG5tVfIFKqtBMzjzfkKFffARpPg/viewform?usp=sf_link`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Our Clubs</h1>
      <div className="grid grid-cols-2 gap-4">
        {allClubs.map((club, index) => ( // Changed `event` to `club` and `event.id` to `club.club_id`
          <div
            key={club.club_id}
            className={`bg-white rounded-lg shadow-md p-6 ${
              index % 2 === 0 ? 'bg-blue-50' : 'bg-green-50'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{club.club_name}</h2>
            <img src={club.club_image} alt={club.club_name} className="w-full h-60 object-cover mb-4" />
            <p className="text-gray-600 mb-2">Type: {club.club_type}</p>
            <p className="text-gray-600 mb-2">Members: {club.members}</p>
            <p className="text-gray-600 mb-4">Events: {club.events}</p>
            <div className="flex justify-end">
              <button
                className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleJoinEvent(club.club_id)} // Changed `event.id` to `club.club_id`
              >
                Join Club
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clubs;
