import { setStartupPokemon } from "@/Redux/features/searchSlice";
import SearchInput from "@/Components/SearchInput";
import { store } from "@/Redux/Store";
import Preloader from "@/Components/Preloader";

const Home = async () => {

    const req = await fetch("http://localhost:3000/api/search");

    const data = await req.json();

    store.dispatch(setStartupPokemon(data));

    return (
        <div className="flex flex-col items-center my-6">
            <Preloader pokemons={data} />
            <SearchInput />
        </div>
    )
};

export default Home;