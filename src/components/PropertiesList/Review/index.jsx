import { Avatar } from "antd";
import React from "react";
import userImg from "../../../assets/imgs/avatar.png";
import { PageTitle } from "../style";
import {
  Line,
  Liner,
  Container,
  ReviewWrapper,
  UserContent,
  AvatarImg,
  UserReviewTime,
  Month,
  Year,
  Time,
  Stars,
  UserTimeDetails,
} from "./style";

const Review = (value) => {
  return (
    <div>
      <PageTitle>
        {value.count || 0} ({value.review || 0} reviews)
      </PageTitle>
      <Container>
        <div>
          <UserContent>
            <ReviewWrapper>
              <p className="grayTitle">Cleanliness</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
            <ReviewWrapper>
              <p className="grayTitle">Communication</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
            <ReviewWrapper>
              <p className="grayTitle">Check-in</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
          </UserContent>

          <AvatarImg src={userImg} alt="user image" />
          <p className="subTitle">Jane Cooper</p>
          <UserReviewTime>
            <UserTimeDetails>
              <Month>
                <p className="grayTitle">Aprel 6,</p>
              </Month>
              <Year>
                <p className="grayTitle">2021</p>
              </Year>
              <Time>
                <p className="grayTitle">at 3.21 AM</p>
              </Time>
            </UserTimeDetails>
            <Stars>
              <div>⭐⭐⭐⭐⭐</div>
              <span>({value.review || 0} reviews)</span>
            </Stars>
          </UserReviewTime>
          <p className="grayTitle">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.
          </p>
        </div>
        <div>
          <UserContent>
            <ReviewWrapper>
              <p className="grayTitle">Cleanliness</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
            <ReviewWrapper>
              <p className="grayTitle">Communication</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
            <ReviewWrapper>
              <p className="grayTitle">Check-in</p>
              <Liner>
                <Line></Line>
                <span>4.7</span>
              </Liner>
            </ReviewWrapper>
          </UserContent>

          <AvatarImg src={userImg} alt="user image" />
          <p className="subTitle">Jane Cooper</p>
          <UserReviewTime>
            <UserTimeDetails>
              <Month>
                <p className="grayTitle">Aprel 6,</p>
              </Month>
              <Year>
                <p className="grayTitle">2021</p>
              </Year>
              <Time>
                <p className="grayTitle">at 3.21 AM</p>
              </Time>
            </UserTimeDetails>
            <Stars>
              <div>⭐⭐⭐⭐⭐</div>
              <span>({value.review || 0} reviews)</span>
            </Stars>
          </UserReviewTime>
          <p className="grayTitle">
            Every single thing we tried with John was delicious! Found some
            awesome places we would definitely go back to on our trip. John was
            also super friendly and passionate about Beşiktaş and Istanbul.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Review;
