import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import LastBlockContent from "../../content/LastBlock.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";

import Testiomonials from "../../components/Testiomonials";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        midInt="Achievements"
        icon="talha.jpeg"
        id="about"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        section={ProductContent.section}
        icon="waving.svg"
        midInt="Key Points"
        id="product"
      />
      <Testiomonials id="testimonials" />
      <MiddleBlock
        title={LastBlockContent.title}
        content={LastBlockContent.text}
        button={LastBlockContent.button}
      />
    </Container>
  );
};

export default Home;
