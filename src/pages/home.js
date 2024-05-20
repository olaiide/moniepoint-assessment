import React from "react";
import NavBar from "../components/NavBar";
import { FaStar, FaArrowUp } from "react-icons/fa";
import Analytics from "../assets/Screenshot 2024-05-15 at 14.37.43.png";
import Data from "../assets/Screenshot 2024-05-15 at 14.43.35.png";
import Shape from "../assets/Screenshot 2024-05-18 at 19.38.48.png";
import Efficiency from "../assets/Screenshot 2024-05-19 at 09.31.48.png";
import Started from "../assets/Screenshot 2024-05-19 at 12.14.42.png";
import DataImage from "../assets/data.png";
import Total from "../assets/Screenshot 2024-05-20 at 06.24.33.png";
import firstImage from "../assets/Screenshot 2024-05-19 at 19.22.42.png";
import thirdImage from "../assets/Screenshot 2024-05-19 at 19.22.57.png";
import "./home.css";
import Button from "../components/Button";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      {/* <div className="hero-section">
        <div>
          <img src={Analytics} style={{ width: "10rem", height: "6rem" }} />
          <h2 style={{ fontSize: "3rem" }}>
            Analytics <br /> <span className="helps">that helps you</span>{" "}
            <br />
            shape the future
          </h2>
        </div>
        <div>
          <img src={Data} style={{ width: "18rem", height: "10rem" }} />
        </div>
      </div> */}
      <div className="heroo">
        <div>
          <div className="analytics">
            <img src={Analytics} style={{ width: "10rem", height: "6rem" }} />
            <h2 className="h2">Analytics</h2>
          </div>
          <h2 className="h2">that helps you</h2>
          <div className="shape">
            <h2 className="h2">
              shape
              <img
                src={Shape}
                style={{ width: "60px", height: "60px" }}
                className="image-shape"
              />
              the future
            </h2>
          </div>
        </div>
        <div>
          {" "}
          <img src={Data} style={{ width: "20rem", height: "10rem" }} />
        </div>
      </div>
      <section className="strategic">
        <div className="strategic-header">
          <h3>
            Your key to strategic <br />
            success through analytics
          </h3>
          <h4>
            Ready for exciting, instantaneous, <br />
            all-accessible insights in real time?
          </h4>
        </div>
        <div className="strategic-card-wrapper">
          <div className="strategic-card">
            <div className="left-content">
              <span className="report">Setting up reports</span>
              <div>
                <h5 className="fast-text">
                  Fast and easy access <br /> to analytics
                </h5>
                <p className="platform-text">
                  One platform is a comprehensive <br />
                  system of solutions that will be the <br /> first step towards
                  digitalization of <br />
                  your business
                </p>
              </div>
            </div>
            <div className="sale-statistic">
              <h4>Sale statistic</h4>
              <div className="sale-card">
                <img src={Total} style={{ width: "3rem", height: "3rem" }} />
                <div className="total-profit">
                  <span>Total profit</span>
                  <span>$264,2k</span>
                </div>
                <div className="visitors">
                  <span>Visitors</span>
                  <div className="progress-container">
                    <div className="progress-bar"></div>
                  </div>

                  <div style={{ fontSize: "1rem" }}>
                    56K
                    <sup>
                      <FaArrowUp
                        size={6}
                        style={{
                          background: "#1ad320",
                          color: "white",
                          borderRadius: "50%",
                          padding: "3px",
                          marginLeft: "2px",
                        }}
                      />
                      <span
                        style={{
                          color: "#1ad320",
                          fontSize: "7px",
                          marginLeft: "2px",
                          position: "relative",
                          bottom: "4px",
                        }}
                      >
                        +14%
                      </span>
                    </sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="transaction-wrapper">
            <div className="images-transactions">
              <div className="images">
                <img
                  src={firstImage}
                  style={{ width: "2rem", height: "2rem" }}
                />
                <img
                  src={thirdImage}
                  style={{ width: "4rem", height: "2.5rem" }}
                />
              </div>
              <div className="transactions">
                <div>Transactions </div>
                <div style={{ fontSize: "2rem" }}>
                  43K
                  <sup>
                    <FaArrowUp
                      size={6}
                      style={{
                        background: "#1ad320",
                        color: "white",
                        borderRadius: "50%",
                        padding: "3px",
                        marginLeft: "2px",
                        position: "relative",
                        bottom: "20px",
                        right: "10px",
                      }}
                    />
                    <span
                      style={{
                        color: "#1ad320",
                        fontSize: "7px",
                        marginLeft: "2px",
                        position: "relative",
                        bottom: "23px",
                        right: "10px",
                      }}
                    >
                      +14%
                    </span>
                  </sup>
                </div>
              </div>
            </div>
            <h4 className="widget">Widget control</h4>
            <span className="widget-report">
              Reports provide a comprehensive overview <br />
              of important aspects of web analytics
            </span>
          </div>
        </div>
        <div className="metrics">
          <span>Up to</span>
          <span>45%</span>
          <span className="span">
            Increase your analytics efficiency by up to 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis
            <br /> and save time for making important, informed decisions
          </span>
        </div>
      </section>
      <section className="efficiency-section">
        <h2 className="h2">
          Maximize efficiency <br /> with our intuitive
        </h2>
        <div>
          <img src={Efficiency} style={{ width: "12rem", height: "7rem" }} />
          <div className="animated-container">
            <span className="animated-text">analytics service</span>
          </div>
        </div>
        <hr className="hr" />
        <div>
          <span className="span">
            Explore traffic sources, page behavior, conversions and more to gain
            deep insight <br />
            into your audience. With us, your business doesn't just adapt - it
            evolves
          </span>
          <div>
            <Button style={{ background: "#EAEAEA", padding: "0 3rem" }}>
              Request a demo
            </Button>
            <Button
              style={{
                background: "#f44336",
                color: "white",
                marginLeft: "0.5rem",
                padding: "0 3rem",
              }}
            >
              Start for free
            </Button>
          </div>
        </div>
      </section>
      <section className="data-section">
        <div>
          <div className="data-content">
            <h4>
              Turning data into real <br />
              actions and ideas.
            </h4>
            <div className="insights">
              <div>
                <span>Instant Insights</span>
                <span>+</span>
              </div>
              <div>
                <span>AI technology</span>
                <span>+</span>
              </div>
              <div>
                <span>Easy Integration</span>
                <span>+</span>
              </div>
            </div>
          </div>
          <img
            src={DataImage}
            style={{
              width: "45rem",
              height: "45rem",
              marginLeft: "7rem",
              zIndex: "100",
            }}
          />
        </div>
        <h1>Ramos</h1>
      </section>
      <section className="get-started-section">
        <img
          src={Started}
          style={{ width: "5.5rem", height: "7rem", margin: "0 auto" }}
        />
        <h2 className="h2">Get Started</h2>
        <span>
          Turn information into advantage! Start using <br />
          Ramos today. Sign up for a free trial
        </span>
        <div>
          <Button style={{ background: "#EAEAEA", padding: "0 3rem" }}>
            Request a demo
          </Button>
          <Button
            style={{
              background: "#f44336",
              color: "white",
              marginLeft: "0.5rem",
              padding: "0 3rem",
            }}
          >
            Start for free
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
