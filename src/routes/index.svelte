<script>
	import Pokedex from '../components/Pokedex.svelte';

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
	<title>Svelte Kit Pokédex</title>
</svelte:head>

<h1 class="text-2xl text-center my-8 uppercase">Svelte Kit Pokédex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200 mb-4"
	type="text"
	placeholder="Search Pokémon"
	on:keyup={({ target: { value } }) => debounce(value)}
/>

<Pokedex {searchTerm} />

<style>
</style>
