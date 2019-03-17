import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as PokemonActions from "../actions/pokemon";
import PokemonComponent from "../components/Pokemon";

function mapStateToProps(state) {
  return {
    isLoadingPokemon: state.pokemon.isLoading,
    pokemon: state.pokemon.pokemon,
    msg: state.pokemon.msg
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PokemonActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonComponent);
