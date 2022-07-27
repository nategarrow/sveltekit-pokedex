import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async () => {
	let url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
	const res = await fetch(url);
	const data = await res.json();

	// get list of pokemon
	const loadedPokemon = data.results.map((data, index) => {
		return {
			id: index + 1,
			name: data.name.split('-').join(' ').toUpperCase(),
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});

	pokemon.set(loadedPokemon);

	return;
};

fetchPokemon();
