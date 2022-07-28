import { useState } from "react";
import styled from "styled-components";

export const DeletePokemon = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/delete/${name}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          window.alert(
            `${name} is removed from pokedex. Click red button to see new Pokedex.`
          );
        }
      });
    setName("");
  };

  return (
    <Container>
      <h2>Remove a Pokemon</h2>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Wrapper>
          <label>Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Wrapper>
        <StyledBtn type="submit">Remove a Pokemon</StyledBtn>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  border-right: 2px solid #3c5aa6;
  padding: 20px;
`;
const StyledForm = styled.form`
  padding: 25px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
  justify-content: space-between;
`;
const StyledBtn = styled.button`
  height: 35px;
  background-color: #2a75bb;
  border: 2px solide #3c5aa6;
  color: #ffcd54;
  margin-top: 20px;
`;
