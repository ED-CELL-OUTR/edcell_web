import "./../footer/footer.css";
import { Link } from "react-router-dom";
import insta from "./../../img/insta.svg";
import ld from "./../../img/linkd.svg";
import twitter from "./../../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main">
        <div className="sub-main">
          <h1>Feel free to ping us !</h1>
          <div className="icons">
            <a
              href="https://www.instagram.com/edcell_outr/?utm_source=ig_embed&ig_rid=386c6343-85a1-4de5-a100-851ce7a0d527"
              target={"blank"}
            >
              <img src={insta} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/ed-cell-outr/mycompany/"
              target={"blank"}
            >
              <img src={ld} alt="" />
            </a>
            <a href="/" target={"blank"}>
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
        <div className="sub-main">
          <h1>Quick Links</h1>
          <div className="links">
            <ul>
              <li
                style={{
                  listStyle: "none",
                  marginLeft: "-1rem",
                  marginTop: "-.5rem",
                }}
              >
                <Link to="/events" className="link">
                  Events
                </Link>
              </li>
            </ul>
            {/* <Link to="/events" className="link">
              <p style={{ marginBottom: "2rem" }}>Events</p>
            </Link> */}
            {/* <p>Contact Us</p>
            <p>About Us</p>
            <p>Team</p>
            <p>Testimonials</p> */}
          </div>
        </div>
        <div className="sub-main">
          <h1>Get In Touch</h1>
          <div className="info">
            <p>+91-9583785500</p>
            <p>OUTR, Ghatikia, Bhubaneswar pcr@ecell.org.in</p>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", color: "#fffff7" }} />
      <div className="cred">
        <p>Made with ❤️ by web team</p>
      </div>
    </footer>
  );
};

export default Footer;
