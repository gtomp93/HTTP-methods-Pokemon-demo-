import { useState } from 'react';
import styled from 'styled-components';

export const AddPokemon = () => {
  const initialValue = { name: '', type: '', entry: '' };
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/add', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((banana) => {
        if (banana.message === 'success') {
          window.alert(
            `${value.name} is added to Pokedex! click on red button to see new Pokedex. `
          );
        }
      });
    setValue(initialValue);
  };

  return (
    <Container>
      <h2>Add a new Pokemon</h2>
      <StyledForm onSubmit={(e) => handleSubmit(e)}>
        <Wrapper>
          <label>Name</label>
          <StyledInput
            id="name"
            type="text"
            placeholder="Name"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </Wrapper>
        <Wrapper>
          <label>Type</label>
          <StyledInput
            id="type"
            type="text"
            placeholder="use space if more than one type"
            value={value.type}
            onChange={(e) => setValue({ ...value, type: e.target.value })}
          />
        </Wrapper>
        <Wrapper>
          <label>Description</label>
          <Entry
            id="description"
            type="text"
            placeholder="Description"
            value={value.entry}
            onChange={(e) => setValue({ ...value, entry: e.target.value })}
          />
        </Wrapper>
        <StyledBtn type="submit">Add New Pokemon</StyledBtn>
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
const StyledInput = styled.input`
  width: 250px;
`;
const Entry = styled.textarea`
  resize: none;
  height: 100px;
  width: 250px;
`;
const StyledBtn = styled.button`
  height: 35px;
  background-color: #2a75bb;
  border: 2px solide #3c5aa6;
  color: #ffcd54;
  margin-top: 20px;
`;
