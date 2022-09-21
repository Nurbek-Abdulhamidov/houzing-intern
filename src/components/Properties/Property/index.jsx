import React from "react";
import { useState } from "react";
import { data } from "../../../utils/data";
import HouseCard from "../../HouseCard";
import {
  HomeContext,
  HomeParagraph,
  HomeTitle,
} from "../../Main/Recomended/style";

const Property = () => {
  const [info, setInfo] = useState(data);
  console.log(info);
  return (
    <div>
      <HomeContext>
        <HomeTitle>Properties</HomeTitle>
        <HomeParagraph>
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </HomeParagraph>
      </HomeContext>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {info.map((value, index) => {
          return <HouseCard key={index} info={value} />;
        })}
      </div>
    </div>
  );
};

export default Property;
