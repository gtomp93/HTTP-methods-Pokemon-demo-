const express = require('express');
const {
  getPokedex,
  addPokemon,
  deletePokemon,
  updatePokemon,
} = require('./handlers');

// const pokedex = require('./pokedex');
// const regions = require('./regions');

const PORT = 4000;

const app = express();

app.use(express.json());
//endpoints here
//with req.quey
// app.get('/query/', (req, res) => {
//   const queryVariable = req.query;
//   console.log('req.query', queryVariable);
//   res.status(200).json({
//     status: 200,
//     data: pokedex,
//     message: `The URLQuery is: ${JSON.stringify(req.query)}`,
//   });
// });

//with req.params
// app.get('/params/:paramVariable', (req, res) => {
//   const { paramVariable } = req.params;
//   const variable = req.params.paramVariable;
//   console.log('paramVariable', paramVariable);
//   console.log('req.params', req.params);
//   console.log('variable', variable);
//   res.status(200).json({
//     status: 200,
//     data: regions,
//     message: `${paramVariable} is the paramVariable`,
//   });
// });

//get pokedex data endpoint
app.get('/api/', getPokedex);
//post a new pokemon endpoint
app.post('/api/add', addPokemon);
//delete a pokemon
app.delete('/api/delete/:pokemonName', deletePokemon);
//update pokemon type
app.patch('/api/update/:pokemonName', updatePokemon);

app.listen(PORT, () => {
  console.log(`🌐 Server listening on ${PORT}`);
});
