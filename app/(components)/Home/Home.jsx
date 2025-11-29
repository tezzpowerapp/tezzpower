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

const Home = ({ main, order_now, hiddens }) => {
  return (
    <>
      {hiddens?.section1 === 1 && <Section1 sldier={main?.section1} />}

      {hiddens?.section2 === 1 && <WhySection2 section2={main?.section2} />}

      {hiddens?.section3 === 1 && <WhyWork section3={main?.section3} />}

      {hiddens?.section4 === 1 && <InfiniteSwiper section2={main?.section2} />}

      {hiddens?.section5 === 1 && <PlaceSection section4={main?.section4} />}

      {hiddens?.section6 === 1 && (
        <Movement hid={hiddens?.section6} section5={main?.section5} />
      )}

      {hiddens?.section7 === 1 && (
        <Fear hid={hiddens?.section7} section6={main?.section6} />
      )}

      {hiddens?.section8 === 1 && <Station data={main?.section7} />}

      {hiddens?.section9 === 1 && (
        <SuperFast hid={hiddens?.section9} section8={main?.section8} />
      )}

      {hiddens?.section10 === 1 && (
        <Fag section9={main?.section9} order_now={order_now} />
      )}
    </>
  );
};

export default Home;
