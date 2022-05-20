import React from "react";
import SideBar from "./components/SideBar/SideBar";
import TodaysPatients from "./components/TodaysPatients/TodaysPatients";
import ApptFirstScreen from "./components/ApptFirstScreen/ApptFirstScreen";
import ApptConsult from "./components/ApptConsult/ApptConsult";

function App() {
  return (
    <div className="container">
      <div className="side-bar-container">
        <SideBar />
      </div>
      <div className="sub-container">
        <div className="top-container">
          <div className="top-left-container">
            <ApptFirstScreen />
          </div>
          <div className="top-right-container">
            <ApptConsult />
          </div>
        </div>
        <div className="bottom-container">
          <TodaysPatients />
        </div>
      </div>
    </div>
  );
}

export default App;
