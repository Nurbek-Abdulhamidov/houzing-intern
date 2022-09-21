import styled from "styled-components";

export const Testimonial = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Comment = styled.div`
  width: 380px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  position: relative;
`;

export const Block = styled.div`
  padding: 40px 48px;

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #696969;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 85%;
  left: 47%;
  transform: translate(-50%, 0%);
`;

export const Img = styled.img`
  border: 4px solid #fff;
  border-radius: 50%;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
`;

export const Name = styled.h4`
  color: var(--primaryColor);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const Job = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: var(--secondaryColor);
`;
