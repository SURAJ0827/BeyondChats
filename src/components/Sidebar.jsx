import { useState } from "react";
import { FaHome, FaComments, FaCog, FaBars } from "react-icons/fa";

export default function Sidebar({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);

  const menus = [
    { name: "Home", icon: <FaHome />, value: "home" },
    { name: "Chat", icon: <FaComments />, value: "chat" },
    { name: "Settings", icon: <FaCog />, value: "settings" },
  ];

  return (
    <>
      <div
        className={`hidden lg:flex bg-gray-900 text-white h-screen flex-col transition-all duration-300 
        ${isOpen ? "w-48" : "w-16"} p-4 space-y-4`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl p-2 rounded hover:bg-gray-700"
        >
          <FaBars />
        </button>

        {menus.map((item) => (
          <button
            key={item.value}
            onClick={() => setActive(item.value)}
            className={`flex items-center p-2 rounded hover:bg-gray-700 transition-colors 
              ${active === item.value ? "bg-gray-700" : ""}`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="ml-3">{item.name}</span>}
          </button>
        ))}
      </div>

      {/* Floating toggle button for mobile */}
      <div className="fixed top-20 right-5 z-50 flex lg:hidden">
        <button
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          onClick={() => setShowSidebar(true)}
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex lg:hidden bg-black bg-opacity-40 transition-opacity duration-300 ${
          showSidebar
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setShowSidebar(false)}
      >
        {/* Animated Sidebar */}
        <div
          className={`bg-gray-900 text-white w-48 h-full flex flex-col p-4 space-y-4 transform transition-transform duration-300 ease-in-out ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowSidebar(false)}
            className="self-end text-xl p-2 rounded hover:bg-gray-700"
          >
            ✕
          </button>
          {menus.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setActive(item.value);
                setShowSidebar(false);
              }}
              className={`flex items-center p-2 rounded hover:bg-gray-700 transition-colors ${
                active === item.value ? "bg-gray-700" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="ml-3">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
