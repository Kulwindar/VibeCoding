import { useState } from 'react';
import { mockTrips } from '../lib/mockData';
import { Trip } from '../types';

export function TripsPage() {
  const [trips, setTrips] = useState<Trip[]>(mockTrips);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    purpose: '',
    estimatedBudget: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTrip: Trip = {
      id: `trip_${Date.now()}`,
      employeeId: 'user_1',
      destination: formData.destination,
      startDate: formData.startDate,
      endDate: formData.endDate,
      purpose: formData.purpose,
      estimatedBudget: parseFloat(formData.estimatedBudget),
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
    };
    setTrips([newTrip, ...trips]);
    setFormData({
      destination: '',
      startDate: '',
      endDate: '',
      purpose: '',
      estimatedBudget: '',
    });
    setShowForm(false);
  };

  const statusColors: Record<string, string> = {
    draft: 'bg-slate-700 text-slate-200',
    pending: 'bg-blue-900 text-blue-200',
    approved: 'bg-green-900 text-green-200',
    rejected: 'bg-red-900 text-red-200',
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Trip Requests</h1>
          <p className="text-slate-400">Manage and track your business travel</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          {showForm ? '✕ Cancel' : '+ New Trip Request'}
        </button>
      </div>

      {/* Create Form */}
      {showForm && (
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">Create Trip Request</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Destination *</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="e.g., San Francisco, CA"
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Purpose *</label>
                <input
                  type="text"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  placeholder="e.g., Client Meeting"
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Start Date *</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">End Date *</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Estimated Budget (USD) *</label>
                <input
                  type="number"
                  name="estimatedBudget"
                  value={formData.estimatedBudget}
                  onChange={handleInputChange}
                  placeholder="e.g., 3500"
                  required
                  className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Save & Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Trip List */}
      <div className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50 border-b border-slate-600">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Destination</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Dates</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Purpose</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Budget</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {trips.map((trip) => (
                <tr key={trip.id} className="hover:bg-slate-700/30 transition">
                  <td className="px-6 py-4 text-white font-medium">{trip.destination}</td>
                  <td className="px-6 py-4 text-slate-400 text-sm">
                    {trip.startDate} to {trip.endDate}
                  </td>
                  <td className="px-6 py-4 text-slate-400">{trip.purpose}</td>
                  <td className="px-6 py-4 text-white font-medium">${trip.estimatedBudget}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[trip.status]}`}>
                      {trip.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {trips.length === 0 && !showForm && (
        <div className="text-center py-12">
          <p className="text-slate-400 mb-4">No trip requests yet</p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Create your first trip
          </button>
        </div>
      )}
    </div>
  );
}
