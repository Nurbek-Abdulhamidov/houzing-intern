import styled from "styled-components";

export const ReviewWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  gap: 120px;
  justify-content: space-between;
  margin: 24px 0;
`;

export const UserContent = styled.div`
  width: 100%;
`;

export const Liner = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    color: #0d263b;
  }
`;

export const Line = styled.div`
  width: 150px;
  height: 5px;
  background: #0061df;
  border-radius: 30px;
`;

export const AvatarImg = styled.img`
  border-radius: 50%;
`;

export const UserReviewTime = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const UserTimeDetails = styled.div`
  display: flex;
  align-items: center;
`;
export const Month = styled.div``;

export const Year = styled.div``;

export const Time = styled.div``;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
