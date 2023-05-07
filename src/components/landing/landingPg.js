// import React, { useEffect } from "react";
// import lottie from "lottie-web";
import "./../../components/landing/landing.css";
import p1 from "./../../img/p1.jpg";
import p2 from "./../../img/p2.jpg";
import p3 from "./../../img/p3.jpg";
import Navbar from "./navbar";
import { Carousel } from "antd";

const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Landing = () => {
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector(".container"),
  //     renderer: "svg",
  //     loop: false,
  //     autoplay: true,
  //     animationData: require("./../../rocket.json"),
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   });
  // }, []);

  return (
    <div className="hero">
      <Navbar />
      <section className="banner">
        <div className="left">
          <h1 style={{ color: "#5271FF" }}>ENTREPRENEURSHIP</h1>
          <h1 style={{ color: "#1E1E1E" }}>DEVELOPMENT CELL</h1>
          <p>
            We strive to create a platform that will enable young
            entrepreneurial brains to nurture the magnificent power of their
            wisdom and to escort them on their journey of creation. Our goal is
            to create a virtual platform for young entrepreneurs and creators to
            connect, share dreams, learn from professionals, and develop the
            skills and confidence needed to start their own business.Our goal is
            to equip students with HR, management, persuasive skills, market
            exposure, and investors for their startup. We provide a hands-on
            learning environment within an organization and create opportunities
            for students to learn from professionals and compete in business
            competitions. Our aim is to inspire students to pursue
            entrepreneurship and provide a platform to implement their best
            ideas.
          </p>
        </div>
        <div className="carousel">
          <Carousel autoplay autoplaySpeed={2000} className="banner-carousel">
            <div>
              <h3 style={contentStyle}>
                <img
                  src={p1}
                  style={{ height: "100%", width: "100%" }}
                  alt="pic"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  src={p2}
                  style={{ height: "100%", width: "100%" }}
                  alt="pic"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img
                  src={p3}
                  style={{ height: "100%", width: "100%" }}
                  alt="pic"
                />
              </h3>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Landing;
