import { useState } from 'react';
import styled from 'styled-components';

export const UpdatePokemon = () => {
  const initialValue = { name: '', type: '' };
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('value', value);
    fetch(`/api/update/${value.name}`, {
      method: 'PATCH',
      body: JSON.stringify(value),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('update', data.message);
        if (data.message === 'success') {
          window.alert(`${value.name} updated in Pokedex!`);
        }
      });
    setValue(initialValue);
  };

  return (
    <Container>
      <h2>Change Pokemon Type</h2>
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
        <StyledBtn type="submit">Add New Pokemon</StyledBtn>
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  /* border: 2px solid pink; */
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
const StyledBtn = styled.button`
  height: 35px;
  background-color: #2a75bb;
  border: 2px solide #3c5aa6;
  color: #ffcd54;
  margin-top: 20px;
`;
