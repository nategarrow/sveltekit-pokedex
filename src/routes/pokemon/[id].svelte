<script context="module">
	export const load = async ({ params }) => {
		const pokeman = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`)).json();
		const next = parseInt(params.id) < 151 ? parseInt(params.id) + 1 : false;
		const prev = parseInt(params.id) > 1 ? parseInt(params.id) - 1 : false;

		return {
			status: 200,
			props: {
				pokeman,
				next,
				prev
			}
		};
	};
</script>

<script>
	export let pokeman, next, prev;
	import { fade } from 'svelte/transition';

	let types = pokeman.types.map((type) => type.type.name.toUpperCase());
	let typeColors = {
		fire: '#ff4422',
		grass: '#77cc55',
		poison: '#aa5599',
		water: '#3399ff',
		bug: '#aabb22',
		normal: '#aaaa99',
		dark: '#775544',
		electric: '#ffcc33',
		flying: '#8899ff',
		psychic: '#ff5599',
		ground: '#ddbb55',
		ice: '#66ccff',
		steel: '#aaaabb',
		fairy: '#ee99ee',
		fighting: '#bb5544',
		rock: '#bbaa66',
		ghost: '#6666bb',
		dragon: '#7766ee'
	};

	$: {
		types = pokeman.types.map((type) => type.type.name.toUpperCase());
	}
</script>

<nav class="flex justify-between w-full">
	<div class="w-1/3">
		<a
			href={prev ? `/pokemon/${prev}` : `javascript:void(0)`}
			class={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ${
				prev ? '' : 'cursor-not-allowed'
			}`}>Previous</a
		>
	</div>
	<div class="w-1/3 text-center">
		<a
			href={`/`}
			class={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ${
				prev ? '' : 'cursor-not-allowed'
			}`}>Home</a
		>
	</div>
	<div class="w-1/3 text-right">
		<a
			href={next ? `/pokemon/${next}` : `javascript:void(0)`}
			class={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md ${
				next ? '' : 'cursor-not-allowed'
			}`}>Next</a
		>
	</div>
</nav>

<div
	class="card flex flex-col items-center bg-white mt-8 rounded-md py-8 px-4"
	style={`background-color: ${typeColors[types[0].toLowerCase()] || `#aaaa99`}`}
>
	<img in:fade class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
	<h1 class="text-4xl font-bold text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{types.join(' | ')}</strong> | Height:
		<strong>{pokeman.height}</strong>
		| Weight:
		<strong>{pokeman.weight}</strong>
	</p>
</div>

<style>
	.card {
		border: 8px solid #fee267;
	}
	.card-image {
		width: 300px;
		height: 300px;
		margin-bottom: -50px;
	}
</style>
