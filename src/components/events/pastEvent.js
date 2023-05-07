import { Card } from "antd";
import "./../../styles/style.css";
import PastR from "./../../json/pastEvents.json";

const PastEvent = () => {
  return (
    <div className="cards">
      {PastR.map((records) => {
        return (
          <Card
            style={{
              width: 400,
              marginBottom: "4rem",
            }}
            cover={<img alt="example" src={records.src} />}
            key={records.id}
          >
            <p>{records.title} </p>
          </Card>
        );
      })}
    </div>
  );
};
export default PastEvent;
