import React from "react";
import { BlockTitle, ButtonWrap, Img, Popular, Wrapper } from "./style";
import HomeImg from "../../../assets/imgs/uy1.png";
import { Black } from "../Category/style";
import { Button } from "../../Generic";

const PopularHome = () => {
  return (
    <Popular>
      <Img src={HomeImg} />
      <Black></Black>
      <Wrapper>
        <BlockTitle>
          <h3>
            Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
          </h3>
          <ButtonWrap>
            <Button width="180px" type="primary">
              Read More
            </Button>
          </ButtonWrap>
        </BlockTitle>
      </Wrapper>
    </Popular>
  );
};

export default PopularHome;
