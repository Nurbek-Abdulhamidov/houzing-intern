import React from "react";
import Footer from "../Footer";
import { Container, Wrapper } from "../Main/Recomended/style";
import Property from "./Property";

const Properties = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Property />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default Properties;
