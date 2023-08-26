import "./App.css";
import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";
import Table from "./components/table";
import Select from "./components/select";

function App() {

  const [counter, setCounter] = useState(0);

  const data = [
    {
      id: 1,
      name: "Ilma",
    },
    {
      id: 2,
      name: "Sara",
    },
    {
      id: 3,
      name: "Saad",
    },
    {
      id: 4,
      name: "Fatima",
    },
  ];
  const changebtn = () => {
    setCounter((prev) => prev + 1);
  };


  return (
    <div className="text-center container mt-3">
      <div className="border border-4 p-4">
        <h2>INPUT COMPONENT</h2>
        <Input
          inpType="password"
          placeHolder="Enter Password"
          label="PASSWORD: "
        />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>SELECT COMPONENT</h2>
        <Select
          getValue={(e: string) => {
            console.log(e);
          }}
          label="GENDER"
          options={[
            { displayName: "Select" },
            {
              value: "male",
              displayName: "Male",
            },
            {
              value: "female",
              displayName: "Female",
            },
          ]}
        />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>BUTTON COMPONENT</h2>
        <p>Button Counter : {counter}</p>
        <Button btnText="CLICK HERE" clickFun={changebtn} />
      </div>

      <div className="border border-4 my-3 p-4">
        <h2>TABLE COMPONENT</h2>
        <Table
          label="TESTING TABLE"
          dataSource={data}
          cols={[
            {
              displayName: "Id",
              key: "id",
            },
            {
              displayName: "Name",
              key: "name",
            },
            {
              displayName: "Course",
              key: "course",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;