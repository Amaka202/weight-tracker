import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import Chart from './Chart';
import { firestore } from './firebase';

const Results = () => {
    const [activeTab, setActiveTab] = useState('table');

    const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('measurements')
      .where('person', '==', 'Nnenna')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMeasurements(data);
      });

    return () => unsubscribe();
  }, []);
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
    return (
      <div>
        <div className="flex justify-center mt-8">
          <button
            className={`px-4 py-2 mr-2 ${activeTab === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabClick('table')}
          >
            Table
          </button>
          <button
            className={`px-4 py-2 ml-2 ${activeTab === 'chart' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleTabClick('chart')}
          >
            Chart
          </button>
        </div>
  
        {activeTab === 'table' ? <DataTable measurements={measurements} /> : <Chart measurements={measurements} />}
      </div>
    );
  };
  
  export default Results;
  