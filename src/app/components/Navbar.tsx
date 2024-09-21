import React, { useState } from 'react';
import Image from 'next/image';
import RightSidebar from './RightSidebar';
import menuIcon from '../../../assets/menu.svg'; 
import tl from '../../../assets/tl.svg';
import tl_full from '../../../assets/tl full.svg';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full h-28 bg-black text-white p-4 flex items-center justify-between z-50">
        <div className="flex items-center justify-center w-16">
          <Image
            src={tl}
            width={80}
            height={80}
            alt="Trust Lab Logo"
            className={`animate-zoom-in`}
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image
            src={tl_full}
            width={500}
            height={500}
            alt="Trust Lab Logo"
            className={`-m-20`}
          />
          <span className="text-2xl mt-5 font-bold">Security Operations Center</span>
        </div>
        
        <div className="flex items-center justify-center w-16">
          <button
            onClick={toggleSidebar}
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full"
          >
            <Image src={menuIcon} width={25} height={25} alt="Menu Icon" />
          </button>
        </div>
      </nav>

      <RightSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
