import React from "react";
import { Avatar, Block, Comment, Img, Job, Name, Testimonial } from "./style";
import ImgAvatar from "../../assets/imgs/avatar.png";

const CardAvatar = () => {
  return (
    <Testimonial>
      <Comment>
        <Block>
          <p>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </p>
        </Block>
        <Avatar>
          <Img src={ImgAvatar} />
          <Name>Marvin McKinney</Name>
          <Job>Designer</Job>
        </Avatar>
      </Comment>
      <Comment>
        <Block>
          <p>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </p>
        </Block>
        <Avatar>
          <Img src={ImgAvatar} />
          <Name>Marvin McKinney</Name>
          <Job>Designer</Job>
        </Avatar>
      </Comment>
      <Comment>
        <Block>
          <p>
            “ I believe in lifelong learning and Skola is a great place to learn
            from experts. I've learned a lot and recommend it to all my friends
            “
          </p>
        </Block>
        <Avatar>
          <Img src={ImgAvatar} />
          <Name>Marvin McKinney</Name>
          <Job>Designer</Job>
        </Avatar>
      </Comment>
    </Testimonial>
  );
};

export default CardAvatar;
