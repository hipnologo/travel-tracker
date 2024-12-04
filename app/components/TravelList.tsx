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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Travel History</h2>
      <div className="space-y-4">
        {travels.map((travel: any) => (
          <div key={travel.id} className="border rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-primary text-white mb-2">
                  {travel.mode}
                </span>
                <h3 className="font-medium">
                  {travel.origin} → {travel.destination}
                </h3>
                <p className="text-sm text-gray-600">
                  {format(new Date(travel.date), 'PPP')}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">{travel.duration} mins</p>
                <p className="text-sm text-gray-600">{travel.distance} km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
