import React from 'react';
import Navbar from '../components/Navbar';
import { ArrowLeft } from 'lucide-react'; // Assuming you're using Lucide icons
import ORS from '../components/OverallRiskScore';

const EmailPage: React.FC = () => {
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center pt-28">
        <div className="w-full bg-white shadow-md p-3 flex items-center justify-start gap-4">
          <a
            href='/'
            className="flex items-center gap-1 text-black"
          >
            <ArrowLeft size={20} />
            Back
          </a>
          <span className="text-lg font-bold text-black">Email Dashboard</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6 w-full px-4">
          <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded-lg shadow-lg max-w-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Overall Email Safety Score</h2>
            <ORS />
          </div>
          <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded-lg shadow-lg max-w-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Malicious Domains</h2>
            <div className="w-full h-48 bg-gray-200 rounded"></div>
          </div>

          <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded-lg shadow-lg max-w-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Section 3</h2>
            <div className="w-full h-48 bg-gray-200 rounded"></div>
          </div>
          <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded-lg shadow-lg max-w-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Section 4</h2>
            <div className="w-full h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailPage;

