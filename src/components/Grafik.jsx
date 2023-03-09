import React from "react";

const Charts = () => {
  return (
    <div className="grafik-container">
      <div className="grafikler">
        <div className="grafik-card">
          <div className="grafik-detail">
            <div style={{ display: "block", textAlign: "left" }}>
              <h3>
                ENERJİ TÜKETİMİ{" "}
                <i
                  style={{ marginLeft: "4px" }}
                  class="fa-solid fa-circle-info"
                ></i>
              </h3>
              <p style={{ marginTop: "4px", color: "gray" }}>
                Updated 45 mins ago
              </p>
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  width: "100px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  border: "1px solid gray",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                <p>All</p>
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-arrow-down-long"
                ></i>
              </button>
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  width: "100px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <p>6 Months</p>
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-arrow-down-long"
                ></i>
              </button>
            </div>
          </div>
          <hr style={{ marginTop: "20px" }} />
          <div className="grafik-detail-two">
            <div
              style={{
                display: "flex",
                width: "200px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <i
                  style={{ color: "red" }}
                  class="fa-sharp fa-solid fa-circle-dot"
                ></i>
                <p style={{ color: "gray", marginLeft: "5px" }}>A Group</p>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <i
                  style={{ color: "rgb(153,31,0)" }}
                  class="fa-sharp fa-solid fa-circle-dot"
                ></i>
                <p style={{ color: "gray", marginLeft: "5px" }}>B Group</p>
              </span>
            </div>
          </div>
          <div className="grafik-detail-three">
            <div>
              <p>100</p>
              <p>80</p>
              <p>60</p>
              <p>40</p>
              <p>20</p>
              <p>0</p>
            </div>
              
            <div className="line-two">.</div>
            <div className="line-three">.</div>

            <div className="line-five">.</div>
            <div className="line-six">.</div>

            <div className="line-eight">.</div>
            <div className="line-nine">.</div>

            <div className="line-eleven">.</div>
            <div className="line-twelwe">.</div>

            <div className="line-fourteen">.</div>
            <div className="line-fifteen">.</div>

            <div className="line-seventeen">.</div>
            <div className="line-eightteen">.</div>
          </div>
          <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", marginLeft:"60px",marginTop:"10px"}}>
            <p style={{marginLeft:"30px"}}>Jun</p>
            <p>May</p>
            <p style={{marginLeft:"-5px"}}>April</p>
            <p >Mar</p>
            <p >Fab</p>
            <p >Jen</p>
          </div>
        </div>

        <div className="grafik-card">
          <div className="grafik-detail">
            <div style={{ display: "block", textAlign: "left" }}>
              <h3>
                ZAMAN SAYACI
                <i
                  style={{ marginLeft: "4px" }}
                  class="fa-solid fa-circle-info"
                ></i>
              </h3>
              <p style={{ marginTop: "4px", color: "gray" }}>
                Updated 48 mins ago
              </p>
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  width: "100px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  border: "1px solid gray",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                <p>A Group</p>
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-arrow-down-long"
                ></i>
              </button>
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  width: "100px",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "white",
                  padding: "5px 10px",
                  border: "1px solid gray",
                  borderRadius: "5px",
                }}
              >
                <p>Today</p>
                <i
                  style={{ marginLeft: "10px" }}
                  class="fa-solid fa-arrow-down-long"
                ></i>
              </button>
            </div>
          </div>
          <hr style={{ marginTop: "20px" }} />
          <div className="grafik-detail-two">
            <div
              style={{
                display: "flex",
                width: "200px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <i
                  style={{ color: "red" }}
                  class="fa-sharp fa-solid fa-circle-dot"
                ></i>
                <p style={{ color: "gray", marginLeft: "5px" }}>A Group</p>
              </span>
              <span style={{ display: "flex", alignItems: "center" }}>
                <i
                  style={{ color: "rgb(153,31,0)" }}
                  class="fa-sharp fa-solid fa-circle-dot"
                ></i>
                <p style={{ color: "gray", marginLeft: "5px" }}>B Group</p>
              </span>
            </div>
          </div>
          <div className="grafik-detail-three">
            <div>
              <p>100</p>
              <p>80</p>
              <p>60</p>
              <p>40</p>
              <p>20</p>
              <p>0</p>
            </div>

            <div
              style={{
                borderRadius: "0px",
                clipPath: "polygon(100% 13%, 100% 100%, 0% 100%, 0% 0%)",
              }}
              className="lin"
            >
              .
            </div>
            <div
              style={{
                borderRadius: "0px",
                clipPath: "polygon(100% 61%, 100% 100%, 0% 100%, 0% 0%)",
                background: "rgb(153,31,0)",
              }}
              className="lin-two"
            >
              .
            </div>
            <div
              style={{
                borderRadius: "0px",
                clipPath: "polygon(100% 46%, 100% 100%, 0% 100%, 0% 0%)",
              }}
              className="lin-three"
            >
              .
            </div>
            <div
              style={{
                borderRadius: "0px",
                clipPath: "polygon(100% 45%, 100% 100%, 0% 100%, 0% 0%)",
                background: "rgb(153,31,0)",
              }}
              className="lin-four"
            >
              .
            </div>
            <div
              style={{
                borderRadius: "0px",
                clipPath: "polygon(100% 13%, 100% 100%, 0% 100%, 0% 0%)",
              }}
              className="lin-five"
            >
              .
            </div>
          </div>
          <div style={{display:"flex", alignItems:"center",justifyContent:"center", gap:"30px", marginTop:"10px"}}>
            <p>12:00</p>
            <p>13:00</p>
            <p>14:00</p>
            <p>15:00</p>
            <p>16:00</p>
            <p>17:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;