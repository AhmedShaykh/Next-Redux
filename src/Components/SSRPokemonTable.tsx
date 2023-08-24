import PokemonTable from "./PokemonTable";
import { store } from "@/Redux/Store";

function SSRPokemonTable() {
    return (
        <div>
            <PokemonTable pokemons={store.getState().search.startupPokemon} />
        </div>
    );
};

export default SSRPokemonTable;