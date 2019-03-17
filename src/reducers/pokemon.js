import { POKEMON_REQUEST, POKEMON_RECEIVE, POKEMON_FAILURE } from "../constants/actions";

const initialState = {
  isFetching: false,
  pokemon: null,
  msg: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POKEMON_REQUEST:
      return {
        ...state,
        isFetching: true,
        msg: '',
      };
    case POKEMON_RECEIVE:
      return {
        ...state,
        isFetching: false,
        pokemon: action.pokemon,
        msg: '',
      };
    case POKEMON_FAILURE:
      return {
          ...state,
          isLoading: false,
          pokemon: null,
          msg: action.msg
      }
    default:
      return state;
  }
}
