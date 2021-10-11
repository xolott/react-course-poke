import Link from "next/link";

const Pokemon = ({ pokemon }) => {
  const id = pokemon.url
    .split("/")
    .filter((x) => x)
    .pop();
  return (
    <li>
      {/* {pokemon.name} */}
      <Link href={`/pokemones/${id}`}>{pokemon.name}</Link>
    </li>
  );
};

export default function Pokemones({ pokemones }) {
  return (
    <div>
      <p>Pokemones</p>
      <ul>
        {pokemones.map((x) => (
          <Pokemon pokemon={x} key={x.name}></Pokemon>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return {
    props: {
      pokemones: data.results,
    },
  };
};
