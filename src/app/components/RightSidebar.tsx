import React from 'react';
import Link from 'next/link';

interface RightSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 bg-gray-900">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          onClick={onClose}
          className="text-xl text-gray-300 hover:text-white"
        >
          &times;
        </button>
      </div>

      {/* Navigation Options */}
      <ul className="p-4 space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link href="/home">
            Home
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link href="/profile">
            Profile
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link href="/settings">
            Settings
          </Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded">
          <Link href="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RightSidebar;
