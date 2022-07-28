const pokedex = require("./pokedex");

const getPokedex = (req, res) => {
  //   console.log('pokeddex', pokedex);
  res.status(200).json({ status: 200, data: pokedex, message: "success" });
};

const addPokemon = (req, res) => {
  const newPokemon = req.body;
  // console.log(newPokemon);

  //add id to newPokemon
  const addedIdPokemon = {
    ...newPokemon,
    id: pokedex.pokedex.length + 1,
    type: newPokemon.type.split(" "),
  };
  // console.log("addedId", addedIdPokemon);
  //add to pokedex
  pokedex.pokedex.unshift(addedIdPokemon);
  //send res back
  res.status(200).json({ status: 200, data: pokedex, message: "success" });
};

const deletePokemon = (req, res) => {
  const { pokemonName } = req.params;
  // console.log(pokemonName);
  //return new pokedex array that contains all the pokemon except the one we want to remove
  const updatedPokedex = pokedex.pokedex.filter(
    (pokemonData) => pokemonData.name != pokemonName
  );
  //set the pokedex as the new pokedex
  pokedex.pokedex = updatedPokedex;
  //send response back
  res.status(200).json({ status: 200, data: pokedex, message: "success" });
};

const updatePokemon = (req, res) => {
  const name = req.params.pokemonName;
  // console.log("name", name);
  //make the type into an array
  const newType = req.body.type;
  // console.log("typeArr", req.body.type);
  const typeArr = newType.split(" ");
  //return a new pokedex that contains the updated pokemon type
  const updatedPokedex = pokedex.pokedex.map((pokemon) => {
    if (pokemon.name === name) {
      //update the pokemon
      return { ...pokemon, type: typeArr };
    } else {
      return pokemon;
    }
  });
  //set the pokedex as the new pokedex
  pokedex.pokedex = updatedPokedex;
  //send response back
  res
    .status(200)
    .json({ status: 200, data: pokedex.pokedex, message: "success" });
};

module.exports = { getPokedex, addPokemon, deletePokemon, updatePokemon };
