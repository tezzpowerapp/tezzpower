import Fag from "./Fag";
import Fear from "./Fear";
import InfiniteSwiper from "./HomeLoopSwiper";
import Movement from "./Movement";
import PlaceSection from "./PlaceSection";
import Section1 from "./Section1";
import Station from "./Station";
import SuperFast from "./SuperFast";
import WhySection2 from "./WhySection2";
import WhyWork from "./WhyWork";

const Home = ({ main, order_now }) => {
  return (
    <>
      <Section1 sldier={main?.section1} />

      <WhySection2 section2={main?.section2} />
      {/* <WhyWork section3={main?.section3} /> */}
      <InfiniteSwiper section2={main?.section2} />
      {/* <PlaceSection section4={main?.section4} /> */}
      <Movement section5={main?.section5} />
      <Fear section6={main?.section6} />
      {/* <Station data={main?.section7} /> */}
      <SuperFast section8={main?.section8} />
      <Fag section9={main?.section9} order_now={order_now} />
    </>
  );
};

export default Home;
