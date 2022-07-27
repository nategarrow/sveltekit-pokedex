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

	$: {
		types = pokeman.types.map((type) => type.type.name.toUpperCase());
	}
</script>

<nav class="flex justify-between w-full">
	<div>
		<a
			href={prev ? `/pokemon/${prev}` : `javascript:void(0)`}
			class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${
				prev ? '' : 'cursor-not-allowed'
			}`}>Previous</a
		>
	</div>
	<div>
		<a
			href={next ? `/pokemon/${next}` : `javascript:void(0)`}
			class={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ${
				next ? '' : 'cursor-not-allowed'
			}`}>Next</a
		>
	</div>
</nav>

<div transition:fade class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{types.join(' | ')}</strong> | Height:
		<strong>{pokeman.height}</strong>
		| Weight:
		<strong>{pokeman.weight} Lbs.</strong>
	</p>
	<img class="card-image" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>
