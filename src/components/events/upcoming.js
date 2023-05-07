import { Card } from "antd";
import { Row, Col } from "antd";
import "./../../styles/style.css";
import UpcomingR from "./../../json/upcomingEvents.json";
// import Timer from "./timer";

const Upcoming = () => {
  function handleClick(link) {
    window.open(link, "_blank");
  }

  return (
    <div className="cards">
      {UpcomingR.map((records) => {
        return (
          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col>
              <Card
                style={{
                  width: 400,
                  marginBottom: "4rem",
                }}
                className="each-card"
                cover={<img alt="example" src={records.src} />}
                key={records.id}
              >
                {/* <p>{records.title} </p> */}
                <div
                  className="card-content"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h3>{records.title}</h3>
                  <p>{records.date}</p>
                </div>
                <div className="card-content">
                  <p>{records.subtitle}</p>
                  <p>{records.time}</p>
                </div>
                <div className="card-timer">
                  {/* <p>
              ENDS IN <span id="endsin"></span>
            </p> */}
                  {/* <Timer /> */}
                </div>
                <button
                  className="button"
                  style={{ verticalAlign: "middle" }}
                  key={records.id}
                  onClick={() => handleClick(records.link)}
                >
                  <span>Register</span>
                </button>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
};
export default Upcoming;
