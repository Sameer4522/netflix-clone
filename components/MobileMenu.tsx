import React from "react";

interface props {
  visible?: boolean;
}

const MobileMenu: React.FC<props> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex flex-col border-2 border-gray-800">
      <div className="flex flex-col gap-4">
        <div className="px-3 text-center text-white hover:underline">Home</div>
        <div className="px-3 text-center text-white hover:underline">
          Serise
        </div>
        <div className="px-3 text-center text-white hover:underline">Films</div>
        <div className="px-3 text-center text-white hover:underline">
          New & popular
        </div>
        <div className="px-3 text-center text-white hover:underline">
          My list
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Browse by languages
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
