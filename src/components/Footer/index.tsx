import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import { FooterRow, Extra, FooterContainer } from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <Extra>
        <Container border={true}>
          <FooterRow
            style={{
              paddingTop: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                color: "#18216d",
                fontSize: "2.5rem",
                fontWeight: 600,
                marginTop: "1rem",
              }}
            >
              Talha Tariq
            </h3>

            <FooterContainer>
              <SocialLink
                href="https://github.com/TT-talhatariq"
                src="github.svg"
              />
              <SocialLink
                href="https://twitter.com/tt_talhatariq"
                src="twitter.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/talha-tariq1/"
                src="linkedin.svg"
              />
              <SocialLink
                href="https://medium.com/@talhatariq-tt"
                src="medium.svg"
              />
            </FooterContainer>
          </FooterRow>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
