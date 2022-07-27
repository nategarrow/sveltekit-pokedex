<script>
	import Pokedex from '../components/Pokedex.svelte';
	import { pokemon } from './../stores/pokestore.js';

	let searchTerm = '';
	let timer;
	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchTerm = v;
		}, 750);
	};
</script>

<svelte:head>
	<title>Svelte Kit Pokedex</title>
</svelte:head>

<h1 class="text-2xl text-center my-8 uppercase">Svelte Kit Pokedex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-4"
	type="text"
	placeholder="Search Pokemon"
	on:keyup={({ target: { value } }) => debounce(value)}
/>

<Pokedex {searchTerm} />

<style>
</style>
