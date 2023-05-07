import "./../faq/faq.css";
import faq from "./faq.json";
import { Collapse } from "antd";
import Achieve from "./achievement";

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const { Panel } = Collapse;

  return (
    <div className="accordion">
      <div className="main">
        <div className="sub-main">
          <h1 style={{ fontSize: "2rem" }}>Our Achievements</h1>
          <p>
            <Achieve />
          </p>
        </div>
        <div className="sub-main">
          <h1 style={{ fontSize: "2rem" }}>General Questions</h1>
          <div className="collapse">
            {faq.map((data) => {
              return (
                <Collapse defaultActiveKey={["1"]} onChange={onChange}>
                  <Panel header={data.header} key={data.key}>
                    <p>{data.body}</p>
                  </Panel>
                </Collapse>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
