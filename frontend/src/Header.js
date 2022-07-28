import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <LineDiv />
        <TextContainer>
          <StyledH1>Gotta catch'em all, these HTTP methods!</StyledH1>
        </TextContainer>
      </Container>
      <BallContainer>
        <RoundBall />
      </BallContainer>
    </>
  );
};

const Container = styled.div`
  height: 100px;
  width: 98vw;
  background-color: none;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  border: 5px solid black;
`;

const LineDiv = styled.div`
  border-bottom: 5px solid black;
  background-color: #fb1b1b;
  height: 50px;
`;

const BallContainer = styled.div`
  height: 100px;
  width: 98vw;
  position: absolute;
  padding-top: 8px;
  top: 5px;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RoundBall = styled.div`
  height: 10px;
  width: 10px;
  background-color: white;
  border: 5px solid black;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  padding-left: 5px;
  height: 50px; ;
`;

const StyledH1 = styled.h1`
  margin: 0;
`;
