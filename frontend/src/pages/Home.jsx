import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <header
      className="App-header"
      style={{
        display: "flex",
      }}
    >
      <div className="propElements">
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
        <div
          className="card "
          id="card-1"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <div className="cardSec-1">
            <h3 className="parkName">Parking - 1</h3>
            <div className="parkAddress">
              xyz - lane, block no : 450, sector - 15, swarg nagar, new delhi
            </div>
          </div>
          <span
            className="cardStatus"
            style={{ backgroundColor: "green" }}
          ></span>
        </div>
      </div>
    </header>
  );
}

export default Home;
