import React from "react";

type selectProp = {
  label: string;
  options: {};
  getValue: any;
};

const Select = (props: selectProp) => {
  const { label, options, getValue } = props;

  let selectChange = (val: string) => {
    getValue(val);

    // console.log(val);
  };

  return (
    <div>
      <h4>{label}</h4>
      <select onChange={(e) => selectChange(e.target.value)}>
        {options &&
          Array.isArray(options) &&
          options.map((x, i) => (
            <option key={i} value={x.value}>
              {x.displayName}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;