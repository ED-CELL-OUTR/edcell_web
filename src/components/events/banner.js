import banimg from "./../../img/eventbanner.svg";
import events from "./../../img/events.svg";
import "./../../styles/style.css";

const Banner = () => {
  return (
    <div className="banner-event">
      <img src={events} style={{ fontSize: "8rem" }} alt="" />
      <img src={banimg} alt="" />
    </div>
  );
};

export default Banner;
