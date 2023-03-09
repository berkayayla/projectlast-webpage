import React from "react";

const Header = () => {
  const myFunction = (e) => {
    var x = document.getElementById("navbar-default");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  };

  return (
    <header>
      <div className="header-menu">
        <span className="logo">
          <img src="/logo-web.png" alt="" />
        </span>
        <ul>
          <li id="active">
            <a href="#deneme">Dashboard</a>
          </li>
          <li>
            <a href="#deneme">Map</a>
          </li>
          <li>
            <a href="#deneme">
              Lists{" "}
              <i
                style={{ marginLeft: "5px" }}
                class="fa-solid fa-caret-down"
              ></i>
            </a>
          </li>
          <li>
            <a href="#deneme">Profile</a>
          </li>
          <li>
            <a href="#deneme">Reporting</a>
          </li>
          <li>
            <a href="#deneme">Inventory</a>
          </li>
          <li>
            <a href="#deneme">Teams</a>
          </li>
        </ul>

        <div className="user">
          <img
            src="https://st2.depositphotos.com/6672578/9743/i/450/depositphotos_97431594-stock-photo-businessman-smiling-confidently-at-camera.jpg"
            alt=""
          />
          <span>
            <b>John Wick</b>
            <p style={{ color: "gray", marginTop: "3px" }}>Admin</p>
          </span>
        </div>
      </div>
      <div id="mobile-button">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={myFunction}
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
      <div id="navbar-default" className="mobile-menu">
        <ul style={{ textAlign: "center" }}>
          <li id="active">
            <a href="#deneme">Dashboard</a>
          </li>
          <li>
            <a href="#deneme">Map</a>
          </li>
          <li>
            <a href="#deneme">
              Lists
              <i
                style={{ marginLeft: "5px" }}
                class="fa-solid fa-caret-down"
              ></i>
            </a>
          </li>
          <li>
            <a href="#deneme">Profile</a>
          </li>
          <li>
            <a href="#deneme">Reporting</a>
          </li>
          <li>
            <a href="#deneme">Inventory</a>
          </li>
          <li>
            <a href="#deneme">Teams</a>
          </li>
        </ul>
        <div className="user">
          <span style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{
                width: "40px",
                objectFit: "cover",
                height: "40px",
                borderRadius: "50%",
              }}
              src="https://st2.depositphotos.com/6672578/9743/i/450/depositphotos_97431594-stock-photo-businessman-smiling-confidently-at-camera.jpg"
              alt=""
            />
            <div style={{ display: "block", marginLeft: "5px" }}>
              <b>John Wick</b>
              <p style={{ color: "gray", marginTop: "3px" }}>Admin</p>
            </div>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
