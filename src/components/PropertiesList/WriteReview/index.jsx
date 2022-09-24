import React from "react";
import { Button, Input } from "../../Generic";
import { Liner, ReviewWrapper, UserContent } from "../Review/style";
import { PageTitle, Textarea } from "../style";
import { Wrapper, Container, UserInfo, UserDetails } from "./style";

const WriteReview = () => {
  return (
    <Wrapper>
      <PageTitle>Write a Review</PageTitle>
      <Container>
        <UserContent>
          <ReviewWrapper>
            <p className="grayTitle">Cleanliness</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
          <ReviewWrapper>
            <p className="grayTitle">Communication</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
          <ReviewWrapper>
            <p className="grayTitle">Check-in</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
        </UserContent>
        <UserContent>
          <ReviewWrapper>
            <p className="grayTitle">Cleanliness</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
          <ReviewWrapper>
            <p className="grayTitle">Communication</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
          <ReviewWrapper>
            <p className="grayTitle">Check-in</p>
            <Liner>
              <span>⭐⭐⭐⭐⭐</span>
            </Liner>
          </ReviewWrapper>
        </UserContent>
      </Container>
      <UserInfo>
        <UserDetails>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
        </UserDetails>
        <Textarea mt="24px" mb="24px" placeholder="Enter Your Message"></Textarea>
        <Button width="250px" type="primary">
          Send your review
        </Button>
      </UserInfo>
    </Wrapper>
  );
};

export default WriteReview;
