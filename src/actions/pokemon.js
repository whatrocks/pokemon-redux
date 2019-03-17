import {
  POKEMON_REQUEST,
  POKEMON_RECEIVE,
  POKEMON_FAILURE
} from "../constants/actions";

function requestPokemon() {
  return {
    type: POKEMON_REQUEST
  };
}

function receivePokemon(pokemon) {
  return {
    type: POKEMON_RECEIVE,
    pokemon: pokemon
  };
}

function failedRequestPokemon(err) {
  return {
    type: POKEMON_FAILURE,
    msg: err
  };
}

export function fetchPokemon({ name }) {
  return function(dispatch) {
    dispatch(requestPokemon());
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => {
      if (!res.ok) {
        res.text().then(err => dispatch(failedRequestPokemon(err)));
      } else {
        res.json().then(res => dispatch(receivePokemon(res)));
      }
    });
  };
}
