import { Footer, Navbar } from "../components";
import {
  About,
  Explore,
  Feedback,
  Founder,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from "../sections";

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-03 z-0" />
      <WhatsNew />
    </div>

    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-03 z-0" />
      <Founder />
    </div>
    <div className="relative">
      <Feedback />
      <div className="gradient-03 z-0" />
      <Footer />
    </div>
  </div>
);

export default Page;
