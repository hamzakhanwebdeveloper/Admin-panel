import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <div className={`bg-gray-200 text-bl ${isOpen ? "w-37" : "w-16"} transition-all duration-300`}>
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-bold transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
            Dashboard
          </h1>
          <button onClick={toggleSidebar} className="text-bl p-2">
            {isOpen ? "<<" : ">>"}
          </button>
        </div>
        <div className="space-y-4 mt-6">
          {/* Sidebar Links */}
          <SidebarItem icon="fas fa-home" label="Home" path="/" isOpen={isOpen} />
          <SidebarItem icon="fas fa-users" label="Users" path="/users" isOpen={isOpen} />
          <SidebarItem icon="fas fa-database" label="Data" path="/data" isOpen={isOpen} />
          <SidebarItem icon="fas fa-cogs" label="Settings" path="/settings" isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
}

const SidebarItem = ({ icon, label, path, isOpen }) => {
  return (
    <Link to={path} className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-200 rounded-lg cursor-pointer">
      <i className={`${icon} text-xl`}></i> {/* Font Awesome Icon */}
      {isOpen && <span className="text-lg">{label}</span>}
    </Link>
  );
};

export default Sidebar;
