import "./App.css";
import Faq from "./components/faq/faq";
import Footer from "./components/footer/footer";
import LandEve from "./components/landEve/landEve";
import Testimonial from "./components/testimonial/testimonial";
import Landing from "./components/landing/landingPg";
// import EventLanding from "./components/events/eventLanding";

function App() {
  return (
    <div className="App">
      {/* <EventLanding /> */}
      <Landing />
      <LandEve />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
