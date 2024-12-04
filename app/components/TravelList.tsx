'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function TravelList() {
  const [travels, setTravels] = useState([]);

  useEffect(() => {
    fetchTravels();
  }, []);

  const fetchTravels = async () => {
    const response = await fetch('/api/travels');
    const data = await response.json();
    setTravels(data);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Travel History</h2>
      <div className="space-y-6">
        {travels.map((travel: any) => (
          <div key={travel.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                  {travel.mode.toUpperCase()}
                </span>
                <h3 className="text-xl font-bold text-gray-800">
                  {travel.origin} → {travel.destination}
                </h3>
                <p className="text-lg text-indigo-600 font-medium">
                  {format(new Date(travel.date), 'PPP')}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">{travel.duration} mins</p>
                <p className="text-lg text-indigo-600 font-medium">{travel.distance} km</p>
              </div>
            </div>
          </div>
        ))}
        {travels.length === 0 && (
          <div className="text-center text-gray-500 text-lg">
            No travels recorded yet
          </div>
        )}
      </div>
    </div>
  );
}
