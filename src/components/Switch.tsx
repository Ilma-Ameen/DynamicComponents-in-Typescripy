import React, { useState } from "react";

type SwitchProps = {
  label: string;
  onChange: any;
};

const Switch = (props: SwitchProps) => {
  const { label, onChange } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className="switch">
      <label className="switch-label">{label}</label>
      <label className="switch-toggle">
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default Switch;
