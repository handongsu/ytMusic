import React from "react";

const IconButton = ({ icon, onClickIcon = () => {} }) => {
  return (
    <div>
      <div
        className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
        onClick={onClickIcon}
      >
        {icon}
        {/* <RxHamburgerMenu size={24} /> */}
      </div>
    </div>
  );
};

export default IconButton;
