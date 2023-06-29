import React, { useState } from 'react';
import { firestore } from './firebase';

const DataForm = () => {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [weight, setWeight] = useState('');
  const [burstSize, setBurstSize] = useState('');
  const [waistSize, setWaistSize] = useState('');
  const [hipSize, setHipSize] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firestore.collection('measurements').add({
        person: selectedPerson,
        weight,
        burstSize,
        waistSize,
        hipSize,
        timestamp: new Date(),
      });

      // Reset the form
      setSelectedPerson('');
      setWeight('');
      setBurstSize('');
      setWaistSize('');
      setHipSize('');
    } catch (error) {
      console.error('Error adding measurement: ', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="w-full max-w-sm bg-white rounded-lg shadow-md p-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Add Measurements</h2>
        <select
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          value={selectedPerson}
          onChange={(e) => setSelectedPerson(e.target.value)}
        >
          <option value="">Select Person</option>
          <option value="Amaka">Amaka</option>
          <option value="Nnenna">Nnenna</option>
        </select>
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="Burst Size"
          value={burstSize}
          onChange={(e) => setBurstSize(e.target.value)}
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="Waist Size"
          value={waistSize}
          onChange={(e) => setWaistSize(e.target.value)}
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          type="number"
          placeholder="Hip Size"
          value={hipSize}
          onChange={(e) => setHipSize(e.target.value)}
        />
        <button
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DataForm;
