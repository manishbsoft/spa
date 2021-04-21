import React, { useState } from "react";
import Parcel from "single-spa-react/parcel";
import { v4 as uuid } from "uuid";
// import { emitEvent } from "@mc/utils";
import { mountRootParcel } from 'single-spa';

const App = ({ name }) => {
  // eslint-disable-next-line no-undef
  const remoteImport = async url => await System.import(url);

  const [task, updateTask] = useState("");

  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Save data here........");

    dispatchEvent(new CustomEvent(
      '@mc/react-route/todo/add-task',
      { detail: {
        id: uuid(),
        describe: task,
      }}
    ))

    // emitEvent("@mc/react-route/todo/add-task", {
    //   id: uuid(),
    //   describe: task,
    // });
    updateTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel
        config={remoteImport('@mc/react-parcel')}
        // config={() => System.import('@mc/react-parcel')}
        mountParcel={mountRootParcel}
        wrapWith="section"
        className="app-container"
      />
    </>
  );
};

export default App;
