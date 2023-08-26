import React from "react";

type btnProps = {
  clickFun: any;
  btnText: string;
};

const Button = (prop: btnProps) => {
  const { clickFun, btnText } = prop;
  return (
    <div>
      <button onClick={clickFun}>{btnText}</button>
    </div>
  );
};

export default Button;