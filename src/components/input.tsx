import React from "react";

type inpProps = {
  inpType: string;
  placeHolder: string;
  label: string;
};

const Input = (props: inpProps) => {
  const { inpType, placeHolder, label } = props;
  return (
    <div>
      <span>{label}</span>
      <input type={inpType} placeholder={placeHolder} />
    </div>
  );
};

export default Input;