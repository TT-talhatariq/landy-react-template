import { Card } from "antd";
import styled from "styled-components";

interface CardProps {
  name: string;
  //   content: string;
  image: string;
}

const StyledCard = styled("div")`
  width: 600px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
    transform: scale(1.05);
  }
`;

const EachCard: React.FC<CardProps> = ({ name, image }) => {
  const imageUrl = "img/images/" + image;

  return (
    <div
      style={{
        margin: "4rem 2rem",
      }}
    >
      {/* antd card with pic and title  */}
      <StyledCard>
        <img
          src={imageUrl}
          alt="example"
          style={{
            borderRadius: "10px 10px 0 0",
            height: "100%",
            width: "100%",
          }}
        />
      </StyledCard>
    </div>
  );
};

export default EachCard;
