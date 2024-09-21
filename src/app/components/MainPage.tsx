import React from 'react';
import { ORS } from './OverallRiskScore';
import Traffic from './Traffic';
const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100 flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-4 p-4 w-full bg-gray-100">
        <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Overall Risk Score</h2>
            <ORS />
            <span>
            <h2 className='text-red-600 text-xl text-center'> Issues:4 </h2>
            <h2 className='text-orange-500 text-xl text-center'> Warnings:5 </h2>
            </span>
        </div>
        <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-black text-center">Traffic</h2>
          <Traffic />
        </div>
        <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-4">Chart 3</h2>
          <div className="w-full h-48 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-black text-center">Domains</h2>
            <ul className="space-y-2">
                {[
                { name: "Domain 1", path: "" },
                { name: "Domain 2", path: "" },
                { name: "Domain 3", path: "" },
                { name: "Domain 4", path: "" },
                { name: "Domain 5", path: "" },
                { name: "Domain 6", path: "" },
                { name: "Domain 7", path: "" },
                { name: "Domain 8", path: "" },
                { name: "Domain 9", path: "" },
                { name: "Domain 10", path: "" },
                ].map((domain) => (
                <li key={domain.name}>
                    <a 
                    href={domain.path} 
                    className="block p-2 text-blue-600 hover:bg-blue-100 rounded transition"
                    >
                    {domain.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-4">Chart 5</h2>
          <div className="w-full h-48 bg-gray-200 rounded"></div>
        </div>
        <div className="flex flex-col flex-1 min-w-[300px] p-4 bg-white rounded shadow">
          <h2 className="text-lg font-bold mb-4">Chart 6</h2>
          <div className="w-full h-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
