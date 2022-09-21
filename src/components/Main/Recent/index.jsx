import React from "react";
import HouseCard from "../../HouseCard";
import {
  Cards,
  HomeContext,
  HomeParagraph,
  HomeTitle,
} from "../Recomended/style";
import { RecentDiv } from "./style";

const Recent = () => {
  return (
    <RecentDiv>
      <HomeContext>
        <HomeTitle>Recent Properties for Rent</HomeTitle>
        <HomeParagraph>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </HomeParagraph>
      </HomeContext>
      <Cards>
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </Cards>
    </RecentDiv>
  );
};

export default Recent;
