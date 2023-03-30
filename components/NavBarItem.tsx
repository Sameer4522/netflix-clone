import React from "react";

interface props {
  label: string;
}

const NavBarItem: React.FC<props> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition">
      {label}
    </div>
  );
};

export default NavBarItem;
