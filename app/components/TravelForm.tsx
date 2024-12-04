'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

const transportModes = ['airplane', 'train', 'bus', 'car'];

export default function TravelForm() {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await fetch('/api/travels', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
      <h2 className="text-3xl font-bold text-indigo-900 mb-8">Add New Travel</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Transport Mode</label>
          <select
            {...register('mode')}
            className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          >
            {transportModes.map(mode => (
              <option key={mode} value={mode}>
                {mode.charAt(0).toUpperCase() + mode.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Origin</label>
            <input
              type="text"
              {...register('origin')}
              className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="From"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Destination</label>
            <input
              type="text"
              {...register('destination')}
              className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="To"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Duration (mins)</label>
            <input
              type="number"
              {...register('duration')}
              className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="120"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">Distance (km)</label>
            <input
              type="number"
              step="0.1"
              {...register('distance')}
              className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
              placeholder="100"
            />
          </div>
        </div>

        <div>
          <label className="block text-lg font-medium text-gray-700 mb-2">Date</label>
          <input
            type="date"
            {...register('date')}
            className="w-full rounded-xl border-2 border-indigo-100 p-4 text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl font-semibold py-4 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
        >
          {loading ? 'Adding...' : 'Add Travel'}
        </button>
      </div>
    </form>
  );
}
