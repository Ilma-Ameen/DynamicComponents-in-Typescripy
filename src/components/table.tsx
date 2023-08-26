import React from "react";

type Props = {
  label: string;
  dataSource: any[];
  cols: any[];
};

const Table = (props: Props) => {
  const { label, dataSource, cols } = props;

  return (
    <div>
      <h4>{label}</h4>
      <table className="m-auto">
        <thead>
          <tr>
            {cols.map((x, i) => (
              <th className="p-4" key={i}>{x.displayName}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((x, i) => (
            <tr key={i}>
              {cols.map((y, j) => (
                <td className="p-2 px-4" key={j}>{x[y.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;