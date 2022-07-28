import styled from "styled-components";

import { useState } from "react";
import { Pokemon } from "./Pokemon";
import { AddPokemon } from "./AddPokemon";
import { DeletePokemon } from "./DeletePokemon";
import { UpdatePokemon } from "./UpdatePokemon";
import { Header } from "./Header";

export const App = () => {
  const [pokedex, setPokedex] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    ///fetch to get data
    fetch("/api/")
      .then((res) => res.json())
      .then((banana) => {
        // console.log('banana', banana);
        // console.log('banana.data', banana.data);
        // console.log('banana.data.pokedex', banana.data.pokedex);
        setPokedex(banana.data.pokedex);
      });
  };

  if (pokedex === []) {
    return <div>loading</div>;
  }

  return (
    <>
      <Header />
      <PageWrapper>
        <StyledBtn onClick={handleClick}>View Pokedex</StyledBtn>
        <ActionWrapper>
          <AddPokemon />
          <DeletePokemon />
          <UpdatePokemon />
        </ActionWrapper>
        {pokedex.length > 0 && (
          <div>
            {pokedex.map((pokemon) => {
              return <Pokemon key={pokemon.id} pokemon={pokemon} />;
            })}
          </div>
        )}
      </PageWrapper>
    </>
  );
};

const StyledBtn = styled.button`
  height: 35px;
  background-color: red;
  border: 2px solide #3c5aa6;
  color: white;
  box-shadow: 1px 3px 15px 5px #c7a008;
  margin: 20px;
`;

const PageWrapper = styled.div`
  padding: 20px 100px;
`;

const ActionWrapper = styled.div`
  display: flex;
  margin: 20px;
  padding-top: 30px;
  border-top: 2px solid #3c5aa6;
`;
