import list from "./eveList.json";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./../landEve/landEve.css";

const LandEve = () => {
  return (
    <div className="eve-list">
      <div className="main">
        <div className="register">
          <h1 style={{ color: "#f15c28" }}>
            UPCOMING <span style={{ color: "#1e1e1e" }}>EVENTS</span>
          </h1>
          <div className="reg-btn">
            <Link to="/events">
              {" "}
              <button>
                REGISTER NOW{" "}
                <span className="span" style={{ fontSize: "3rem" }}>
                  <BsArrowUpRightSquareFill />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="list">
          <div className="each-card">
            {list.map((data) => {
              return (
                <div className="blue-bg" key={data.key}>
                  <div className="date">
                    <p style={{ fontWeight: "bolder" }}>
                      {data.month} <br />
                      {data.date}
                    </p>
                    {/* <p>11</p> */}
                  </div>
                  <div className="info">
                    <h2>{data.eventTitle}</h2>
                    <h4>{data.time}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandEve;
