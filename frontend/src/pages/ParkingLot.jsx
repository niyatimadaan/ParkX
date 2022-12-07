import React from "react";

function ParkingLot() {
  let data = {
    parkId: 123456789,
    parkName: "Parking - 1",
    parkAddress:
      "xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi",
    cost: 10,
    capacity: 100,
    free: 50,
  };
  return (
    <header
      className="App-header ParkingLot-header"
      style={{
        display: "flex",
      }}
    >
      <div className="parkId">A2664,</div>
      <div className="mainContainor">
        <div className="address mainBox">
          <div className="parkName">Parking - 1</div>
          <div className="parkAddress">
            xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
          </div>
        </div>
        <div className="cost mainBox">$10</div>
        <div className="available mainBox">
          <span className="free">50</span>
          <span className="capacity">/100</span>
        </div>
      </div>
      <div className="getButton">Get Spot!</div>
    </header>
  );
}

export default ParkingLot;
