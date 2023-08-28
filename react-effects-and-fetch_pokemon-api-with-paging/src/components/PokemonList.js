import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");
  const [data, setData] = useState("");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemon(data.results);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [url]);

  return (
    <main>
      <button
        type="button"
        onClick={() => setUrl(data.previous)}
        disabled={!data.previous}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setUrl(data.next)}
        disabled={!data.next}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
