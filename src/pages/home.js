import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";
import { FaStar, FaArrowUp } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import Analytics from "../assets/Screenshot 2024-05-15 at 14.37.43.png";
import Data from "../assets/Screenshot 2024-05-15 at 14.43.35.png";
import Shape from "../assets/Screenshot 2024-05-18 at 19.38.48.png";
import Efficiency from "../assets/Screenshot 2024-05-19 at 09.31.48.png";
import Started from "../assets/Screenshot 2024-05-19 at 12.14.42.png";
import DataImage from "../assets/data.png";
import Total from "../assets/Screenshot 2024-05-20 at 06.24.33.png";
import firstImage from "../assets/Screenshot 2024-05-19 at 19.22.42.png";
import thirdImage from "../assets/Screenshot 2024-05-19 at 19.22.57.png";
import Graph from "../assets/Capture.png";
import Man from "../assets/man.jpeg";
import Woman from "../assets/woman.jpeg";
import Bar from "../assets/Screenshot 2024-05-20 at 16.53.10.png";
import "./home.css";
import Button from "../components/Button";
import Footer from "../components/Footer";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Counter from "../components/Counter";
import { useIntersection } from "react-use";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LandingPage = () => {
  const revealRef = useRef(null);

  const analyticsSection = useRef(null);

  const analyticsIntersection = useIntersection(analyticsSection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });
  const fadeIn = (element) => {
    gsap.to(element, 3, {
      opacity: 1,
      y: -50,
      ease: "power1.out",
      stagger: {
        amount: 10,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };
  // analyticsIntersection && analyticsIntersection.intersectionRatio < 0.3
  //   ? fadeOut(".heroo")
  //   : fadeIn(".heroo");

  useEffect(() => {
    const element = revealRef.current;
    gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%", // Adjust start position as needed
        },
      }
    );
    // gsap.fromTo(
    //   revealRef.current,
    //   { opacity: 0, y: 300 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 5,
    //     scrollTrigger: {
    //       trigger: revealRef.current,
    //       start: "top 80%", // Element's top hits 80% of the viewport
    //       end: "top 30%", // Element's top hits 30% of the viewport
    //       scrub: 5,
    //     },
    //   }
    // );
  }, []);

  // useEffect(() => {
  //   const counter = setInterval(() => {
  //     if (counter < 66) {
  //       setCount(count + 1);
  //     } else {
  //       clearInterval(counter);
  //     }
  //   }, 30);

  //   return () => clearInterval(counter);
  // }, [count]);

  return (
    <div>
      <div style={{}}>
        <NavBar />
        <div className="heroo">
          <div>
            <div className="analytics">
              <img src={Analytics} style={{ width: "10rem", height: "6rem" }} />
              <h2 className="h2 ">Analytics</h2>
            </div>
            <h2 className="h2 that-helps">
              that <span style={{ opacity: "0.3" }}>helps</span> you
            </h2>
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
            <img
              src={Data}
              style={{ width: "22rem", height: "15rem" }}
              className="dataImg"
            />
          </div>
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

                  <div style={{ fontSize: "1.2rem" }}>
                    <Counter target={56} />K
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
              <div className="stats-graph">
                <h4 className="stats-text">View Statistics</h4>
                <img
                  src={Graph}
                  style={{ width: "100%", height: "fitContent" }}
                />
              </div>
            </div>
          </div>

          <div className="transaction-wrapper">
            <div className="images-transactions">
              <div className="images">
                <img
                  src={firstImage}
                  style={{ width: "3rem", height: "3rem" }}
                  alt="firstImage"
                />
                <img
                  src={thirdImage}
                  style={{ width: "6rem", height: "3.0rem" }}
                  alt="thirdImage"
                />
              </div>
              <div className="transactions">
                <div>
                  <div style={{ fontSize: "10px", margin: "10px 0 20px 0" }}>
                    Transactions{" "}
                  </div>
                  <div style={{ fontSize: "2.5rem !important" }}>
                    <Counter target={43} />
                    <sup>
                      <FaArrowUp
                        size={15}
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
                          fontSize: "9px",
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
          <span style={{ fontWeight: "500", fontSize: "80px" }}>45%</span>
          <span className="span">
            Increase your analytics efficiency by up to 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis
            <br /> and save time for making important, informed decisions
          </span>
        </div>
      </section>
      <section className="efficiency-section">
        <h2 className="h2">
          Maximize <span style={{ opacity: "0.2" }}>efficiency</span> <br />{" "}
          with our intuitive
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

      <section className="data-section" ref={revealRef}>
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
          <div className="data-image">
            <img
              src={DataImage}
              style={{
                width: "45rem",
                height: "45rem",
                marginLeft: "0rem",
                zIndex: "100",
              }}
            />
          </div>
        </div>
        <h1>Ramos</h1>
      </section>
      <section className="control-section">
        <div>
          <h2 className="h2">
            We give you full <br />{" "}
            <span style={{ opacity: "0.3" }}>control</span> over your data
          </h2>
        </div>
        <div className="card-container">
          <div className="first-card">
            <div className="conversion-sale">
              <div className="conversion-rate">
                <span>Conversion rate</span>
                <div>
                  <BiSolidOffer className="conversion-icon" />

                  <h3 className="conversion-no">2,3%</h3>
                </div>
                <span className="percent">
                  Percentage of <br />
                  website visitors
                </span>
              </div>
              <div className="sales-rate">
                <span>Sales revenue</span>
                <div className="counter">
                  <span style={{ fontSize: "1.2rem" }}>$</span>
                  <Counter target={131.2} sale={true} />
                  <span style={{ fontSize: "1.2rem", marginLeft: "0.1rem" }}>
                    K
                  </span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar"></div>
                </div>
                <div className="price">
                  <div>
                    <img
                      src={Woman}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    />
                    <span>Min. price</span>
                  </div>
                  <span>$1.200</span>
                </div>
                <div className="price">
                  <div>
                    <img
                      src={Man}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                      }}
                    />
                    <span>Max. price</span>
                  </div>
                  <span>$2.320</span>
                </div>
                <hr className="price-hr" />
                <div className="engagement-rate">
                  <span>Engagement rate</span>
                  <span>47.84%</span>
                </div>
              </div>
            </div>
            <div className="first-card-content">
              <h2>Improved customer service</h2>
              <span style={{ fontSize: "14px" }}>
                Analytics helps optimize service processes by providing
                information on how to improve interactions with customers and
                increase their satisfaction.
              </span>
            </div>
          </div>
          <div className="second-card">
            <div className="topTab"> </div>
            <div className="financeRepoTab">
              <p style={{ fontSize: "12px" }}>
                {" "}
                <span>
                  {" "}
                  <BiSolidOffer className="" />
                </span>{" "}
                Finance Report{" "}
              </p>
            </div>
            <div className="insightss">
              <div className="insightss-content">
                <div className="info">
                  <div style={{ fontSize: "12px" }}>
                    {" "}
                    <BiSolidOffer className="" />
                    <span style={{ marginLeft: "3px" }}>Insights</span>
                  </div>
                  <div className="total-profit">
                    <span style={{ margin: "60px 0 0 0", fontSize: "10px" }}>
                      Total profit
                    </span>
                    <span style={{ margin: "0px 0 10px 0", fontSize: "25px" }}>
                      $264.2K
                    </span>
                    <Button className="button">Data visualization</Button>
                  </div>
                </div>

                <div>
                  <img src={Bar} style={{ width: "12rem", height: "11rem" }} />
                </div>
              </div>
            </div>
            <div className="infoText">
              <h2> Monitor Keys Indicator</h2>

              <p style={{ fontSize: "14px" }}>
                Analytics platforms allow businesses to track KPls, an important
                tool for measuring success and achieving goals
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="get-started-section">
        <img
          src={Started}
          style={{ width: "6.5rem", height: "8rem", margin: "0 auto" }}
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
