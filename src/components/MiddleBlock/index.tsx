import { Row, Col, Modal } from "antd";
import { useState } from "react";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleClick = (name: string) => {
    if (name === "Enroll now") {
      showModal();
    } else {
      scrollTo("mission");
    }
  };
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => handleClick(button)}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
      <>
        <Modal
          title="Exclusive Product Offer"
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
          bodyStyle={{ padding: "20px" }}
          style={{ top: 20 }}
        >
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#4a4a4a" }}>Invest Today in Yourself</h2>
            <img
              src="img/images/flyer.png"
              alt="Product"
              style={{
                width: "100%",
                marginBottom: 20,
                borderRadius: "5px",
                border: "1px solid #f0f0f0",
              }}
            />
            <p>
              There is a small discounted price for the first 100 customers. As
              it is going to be an structured interactive course with access to
              instructor, so we are limiting the number of students to 100.
            </p>
            <p style={{ fontSize: "18px", color: "#ff4d4f" }}>
              <strong>Now Only: $1499 </strong>
              <del style={{ color: "#9e9e9e", marginLeft: 10 }}>$3000</del>
            </p>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                padding: "15px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              <p>
                <strong>Account Details:</strong>
              </p>
              <p>Meezan: 123456789</p>
              <p>
                JazzCash | SadaPay | NayaPay: <b>55435</b>
              </p>

              <p>
                <strong>After Payment:</strong>
                <br />
                Please send us the screenshot of your payment receipt at this
                number: <br />
                <a
                  href="https://api.whatsapp.com/send?phone=923064685191"
                  style={{ color: "#1890ff", textDecoration: "none" }}
                >
                  WhatSapp
                </a>
              </p>
            </div>
          </div>
        </Modal>
      </>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
