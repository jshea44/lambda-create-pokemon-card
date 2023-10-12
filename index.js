'use strict';

const dynamoose = require('dynamoose');

// define schema
const pokemonCardSchema = new dynamoose.Schema({
  id: Number,
  name: String,
  type: String,
  shiny: Boolean,
});

// create our 'Model'
const pokemonModel = dynamoose.model('pokemon-cards', pokemonCardSchema);

exports.handler = async (event) => {
  console.log('HERE IS THE EVENT OBJECT', event);
  // TODO implement

  let results = await pokemonModel.create(event.body);

  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};
