import { InstagramEmbed } from "react-social-media-embed";
import { Carousel } from "antd";

const contentStyle = {
  height: "650px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#f4f4fc",
};

const Achieve = () => {
  return (
    // <div style={{ display: "flex", justifyContent: "center" }}>
    //   <InstagramEmbed
    //     url="https://www.instagram.com/p/CjZz8XkL4FU/?utm_source=ig_web_copy_link"
    //     width={600}
    //     height={800}
    //   />
    // </div>
    <div>
      <p>
        Our ED cell's history shows that growth and progress are essential for
        achievements and success and that growth is never random, it is always
        the result of forces acting in a co-ordinated way. Despite challenges,
        we have successfully organized and executed numerous events and
        meetings.
      </p>
      <Carousel autoplay autoplaySpeed={3000} className="banner-carousel">
        <div>
          <div className="embed" style={contentStyle}>
            <InstagramEmbed url="https://www.instagram.com/p/CjZz8XkL4FU/?utm_source=ig_web_copy_link" />
          </div>
        </div>
        <div>
          <div className="embed" style={contentStyle}>
            <InstagramEmbed url="https://www.instagram.com/p/Cocrh5-L7Dh/?utm_source=ig_web_copy_link" />
          </div>
        </div>
        <div>
          <div className="embed" style={contentStyle}>
            <InstagramEmbed url="https://www.instagram.com/p/CocrYqfrbyO/?utm_source=ig_web_copy_link" />
          </div>
        </div>
        <div>
          <div className="embed" style={contentStyle}>
            <InstagramEmbed url="https://www.instagram.com/p/Clf4FnILpE4/?utm_source=ig_web_copy_link" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Achieve;
