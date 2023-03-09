import React from "react";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="cards">
        <div className="card">
          <div className="detail">
            <div className="detail-one">
              <span id="bolt">
                <i class="fa-solid fa-bolt"></i>
              </span>
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <h1>124</h1>
            <div className="detail-two">
              <span>
                <p>
                  Last Day Power Usage With
                  <i
                    style={{ color: "black", marginLeft: "5px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                </p>
              </span>
              <span id="await">
                <p>%92 Await</p>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="detail">
            <div className="detail-one">
              <span id="bolt">
                <i class="fa-solid fa-sun"></i>
              </span>
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
              <h1>1315</h1>
              <h4
                style={{ color: "green", fontSize: "27px", marginLeft: "5px" }}
                id="yuzde"
              >
                %30
              </h4>
            </div>
            <div className="detail-two">
              <span>
                <p>
                  Node Count
                  <i
                    style={{ color: "black", marginLeft: "5px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="detail">
            <div className="detail-one">
              <span id="bolt">
                <i class="fa-solid fa-bolt"></i>
              </span>
              <span>
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </span>
            </div>
            <h1>4</h1>
            <div className="detail-two">
              <span>
                <p>
                  Gateway Count
                  <i
                    style={{ color: "black", marginLeft: "5px" }}
                    class="fa-solid fa-circle-info"
                  ></i>
                </p>
              </span>
              <span id="await">
                <p>%92 Await</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
