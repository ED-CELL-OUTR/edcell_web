// import { useState } from "react";
// import { Carousel, Button, Drawer } from "antd";
import { Carousel } from "antd";
import "./../../styles/style.css";
import Event from "./event";

const contentStyle = {
  height: "460px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const EventLanding = () => {
  //   const [open, setOpen] = useState(false);
  //   const showDrawer = () => {
  //     setOpen(true);
  //   };
  //   const onClose = () => {
  //     setOpen(false);
  //   };

  return (
    <div>
      {/* side navbar */}

      {/* <div className="sidenav">
        <div className="burger-menu">
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
          <Drawer
            title="Basic Drawer"
            closable={false}
            onClose={onClose}
            open={open}
            placement={"left"}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
        </div>
      </div> */}

      <div className="main">
        {/* banner part */}
        <div className="event-banner-with-carousel">
          <div className="banner-txt">
            <h1>2023 Season</h1>
            <p>
              Find, compete, and earn points at the largest, most diverse hacker
              events in the world.
            </p>
          </div>
          <div className="carousel">
            <Carousel autoplay autoplaySpeed={2000} className="banner-carousel">
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>

        <hr style={{ margin: " 2rem 0rem" }} />
        <div>
          <Event />
        </div>
      </div>
    </div>
  );
};

export default EventLanding;
