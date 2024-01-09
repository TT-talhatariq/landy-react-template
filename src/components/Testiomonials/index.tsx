import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentSection, Content, ContentWrapper } from "./styles";
import Marquee from "react-fast-marquee";
import EachCard from "./EachCard";
import reviews from "../../content/Testimonials.json";

const ContentBlock = ({ t, id }: ContentBlockProps) => {
  return (
    <ContentSection>
      <Fade triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t("Testimonials")}</h6>
              <Content>
                {t(
                  "Here are what my students from all over the world say about me whom I trained, coached and make them become a successful Programmer."
                )}
              </Content>
            </Col>
          </ContentWrapper>

          <Marquee speed={120}>
            {reviews.map((item: { name: string; src: string }) => {
              return (
                <EachCard
                  name={item.name}
                  //   content={item.content}
                  image={item.src}
                />
              );
            })}
          </Marquee>
        </Row>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
