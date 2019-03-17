import React from "react";
import _ from "lodash";

class Pokemon extends React.Component {
  searchPokemon = _.debounce(name => {
    const { fetchPokemon } = this.props;
    if (name.length) {
      fetchPokemon({ name });
    }
  }, 500);

  render() {
    const { pokemon, isLoadingPokemon, msg } = this.props;
    return (
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="type a pokemon name"
          onChange={e => this.searchPokemon(e.target.value)}
        />
        <br />
        <div>
          {isLoadingPokemon && <h3>Loading...</h3>}
          {msg && <h3>{msg}</h3>}
          {pokemon && (
            <div>
              <h3>{pokemon.name}</h3>
              <img
                height="200"
                alt="pokemon"
                src={pokemon.sprites.front_default}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Pokemon;
