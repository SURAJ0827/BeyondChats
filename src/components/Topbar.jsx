import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2 w-full max-w-md bg-gray-100 px-3 py-2 rounded-full">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search conversations..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4 ml-4">
        <FaBell className="text-gray-600 text-lg cursor-pointer hover:text-black" />
        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer hover:text-black" />
      </div>
    </div>
  );
}
