import React from "react";

function index() {
  return (
    <header
      className="App-header"
      style={{
        display: "flex",
      }}
    >
      <h1>Parking System</h1>
      {/* <img src="./logos/play-button.png" className="app-logo" alt="logo" /> */}
      <a href="/home">
        <img src="./logos/play-button.png" className="play-logo" alt="logo" />
      </a>
    </header>
  );
}

export default index;
