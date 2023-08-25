import { Pokemon } from "../../Types";

const PokemonTable = ({ pokemons }: { pokemons: Pokemon[] }) => {
    return (
        <table className="flex flex-col items-center">
            <thead>
                <tr>
                    <th className="py-4 text-2xl">Pokemons Name:</th>
                </tr>
            </thead>

            <tbody>
                {pokemons.map((pokemon, i) => (
                    <tr
                        className="text-center"
                        key={i}
                    >
                        <td className="py-2 text-lg">{pokemon.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default PokemonTable;