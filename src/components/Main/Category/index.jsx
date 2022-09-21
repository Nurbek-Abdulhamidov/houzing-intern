import React from "react";
import { HomeContext, HomeParagraph, HomeTitle } from "../Recomended/style";
import {
  Apartment,
  Black,
  Calculator,
  CategoryBlok,
  CategoryBloks,
  Icon,
  IconBlock,
  Img,
  Office,
  Villa,
} from "./style";
import Home from "../../../assets/imgs/home.jpg";
import Home2 from "../../../assets/imgs/home2.jpg";

const Category = () => {
  return (
    <>
      <HomeContext>
        <HomeTitle>Category</HomeTitle>
        <HomeParagraph>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </HomeParagraph>
      </HomeContext>
      <CategoryBloks>
        <CategoryBlok>
          <Img src={Home} alt="" />
          <Black></Black>
          <IconBlock>
            <Icon />
            <p>House</p>
          </IconBlock>
        </CategoryBlok>
        <CategoryBlok>
          <Img src={Home2} alt="" />
          <Black></Black>
          <IconBlock>
            <Apartment />
            <p>Apartment</p>
          </IconBlock>
        </CategoryBlok>
        <CategoryBlok>
          <Img src={Home} alt="" />
          <Black></Black>
          <IconBlock>
            <Office />
            <p>Office</p>
          </IconBlock>
        </CategoryBlok>
        <CategoryBlok>
          <Img src={Home2} alt="" />
          <Black></Black>
          <IconBlock>
            <Villa />
            <p>Villa</p>
          </IconBlock>
        </CategoryBlok>
      </CategoryBloks>
    </>
  );
};

export default Category;
