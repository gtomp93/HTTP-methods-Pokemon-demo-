import styled from 'styled-components';

export const Pokemon = ({ pokemon }) => {
  return (
    <Container>
      <Wrapper>
        <h2>Name</h2>
        <StyledName>{pokemon.name.toUpperCase()}</StyledName>
      </Wrapper>
      <InfoWrapper>
        <Wrapper>
          <h3>Type</h3>
          <div>
            {pokemon.type.map((item) => {
              return <span>{item} </span>;
            })}
          </div>
        </Wrapper>
        <p>{pokemon.entry}</p>
      </InfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #3c5aa6;
  padding: 20px;
  background-color: #ffcb05;
  opacity: 0.8;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
`;

const StyledName = styled.p`
  font-size: 20px; ;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
