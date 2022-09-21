import React from "react";
import { HomeContext, HomeParagraph, HomeTitle } from "../Recomended/style";
import {
  Block,
  Calculator,
  ChooseDiv,
  Description,
  Discord,
  HomeBloks,
  House,
  Icon,
  Map,
  Title,
  Wrapper,
} from "./style";

const Choose = () => {
  return (
    <ChooseDiv>
      <Wrapper>
        <HomeContext>
          <HomeTitle>Why Choose Us</HomeTitle>
          <HomeParagraph>
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </HomeParagraph>
        </HomeContext>
        <HomeBloks>
          <Block>
            <Discord />
            <Title>Trusted By Thousands</Title>
            <Description>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Description>
          </Block>
          <Block>
            <House />
            <Title>Trusted By Thousands</Title>
            <Description>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Description>
          </Block>
          <Block>
            <Calculator />
            <Title>Trusted By Thousands</Title>
            <Description>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Description>
          </Block>
          <Block>
            <Map />
            <Title>Trusted By Thousands</Title>
            <Description>
              With over 1 million+ homes for sale available on the website,
              Trulia can match you with a house you will want to call home.
            </Description>
          </Block>
        </HomeBloks>
      </Wrapper>
    </ChooseDiv>
  );
};

export default Choose;
