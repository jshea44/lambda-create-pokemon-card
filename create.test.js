'use strict';

const createPokemonCard = require('./index.js');

describe('Create Pokemon Card Lambda Function', () => {
  it('should create a new Pokemon card', async () => {
    const event = {
      body: {
        id: 2,
        name: 'Pikachu',
        type: 'Electric',
        shiny: true,
      },
    };

    const result = await createPokemonCard.handler(event);

    expect(result.statusCode).toBe(200);
    expect(typeof result.body).toBe('string');

    const body = JSON.parse(result.body);
    expect(body).toHaveProperty('id', 2);
    expect(body).toHaveProperty('name', 'Pikachu');
    expect(body).toHaveProperty('type', 'Electric');
    expect(body).toHaveProperty('shiny', true);
  });
});
