import styled from "styled-components";

export const FooterRow = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.2rem;
  }
`;

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
