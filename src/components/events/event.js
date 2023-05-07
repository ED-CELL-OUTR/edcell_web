import { Tabs } from "antd";
import Ongoing from "./ongoing";
import Upcoming from "./upcoming";
// import PastEvent from "./pastEvent";
// import Banner from "./banner";

const Event = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="tabs" style={{ paddingLeft: "0.4rem" }}>
      {/* <Banner /> */}
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1.2rem",
          marginLeft: "0rem",
        }}
        items={[
          {
            label: `Ongoing`,
            key: "1",
            children: <Ongoing />,
          },
          {
            label: `Upcoming`,
            key: "2",
            children: <Upcoming />,
          },
          // {
          //   label: `Past Events`,
          //   key: "3",
          //   children: <PastEvent />,
          // },
        ]}
      />
    </div>
  );
};

export default Event;
