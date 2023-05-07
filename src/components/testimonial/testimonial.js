import React, { useState } from "react";
import "./testimonial.css";
import users from "./../testimonial/profile.js";
import prev from "./../../img/icon-prev.svg";
import next from "./../../img/icon-next.svg";

function Testimonial() {
  const [profile, setProfile] = useState(true);
  const user = users;

  const handleClick = () => {
    setProfile(!profile);
  };

  return (
    <div className="App">
      <div className="site-container">
        <section id="image-container">
          <img
            className="testimonial-img"
            src={profile ? user[0].photo : user[1].photo}
            alt=""
          />
          <div className="btn-container">
            <img
              onClick={handleClick}
              id="previous"
              className="btn"
              src={prev}
              alt="Previous Button"
            />
            <img
              onClick={handleClick}
              id="next"
              className="btn"
              src={next}
              alt="Next Button"
            />
          </div>
        </section>
        <section id="testimonial-container">
          <p className="testimonial-text">
            {profile ? user[0].testimonial : user[1].testimonial}
          </p>
          <div>
            <span className="name">
              {profile ? user[0].name : user[1].name}
            </span>
            <span className="title">
              {profile ? user[0].title : user[1].title}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonial;
