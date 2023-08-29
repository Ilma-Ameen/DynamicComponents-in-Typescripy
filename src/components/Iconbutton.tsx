import React from "react";

type IconButtonProps = {
  icon: string;
  onClick: any;
  label: string;
};

const IconButton = (props: IconButtonProps) => {
  const { icon, onClick , label } = props;

  return (
    <button className="icon-button" onClick={onClick}>
      <i className={`fa ${icon}`} aria-hidden="true"></i>
    </button>
  );
};

export default IconButton;
