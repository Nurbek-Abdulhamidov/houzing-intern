import React from "react";
import { useState } from "react";
import { data } from "../../../utils/data";
import { Button } from "../../Generic";
import HouseCard from "../../HouseCard";
import {
  HomeContext,
  HomeParagraph,
  HomeTitle,
} from "../../Main/Recomended/style";
import { LoadButton } from "./style";

const Property = () => {
  const [info] = useState(data);
  const homePerRow = 6;
  const [next, setNext] = useState(homePerRow);

  const handleMoreImage = () => {
    setTimeout(() => {
      setNext(next + homePerRow);
    }, 500);
  };

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
        {info.slice(0, next)?.map((value, index) => {
          return <HouseCard key={index} info={value} />;
        })}
      </div>
      {next < info?.length && (
        <LoadButton>
          <Button
            onClick={handleMoreImage}
            type="primary"
            mt="24"
            mb="24"
            width="250px"
          >
            +{info?.length - next} Load more
          </Button>
        </LoadButton>
      )}
    </div>
  );
};

export default Property;
