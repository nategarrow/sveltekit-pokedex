<script>
	import { onMount } from 'svelte';
	import { pokemon } from './../stores/pokestore.js';
	import PokemanCard from '../components/PokemanCard.svelte';
	export let searchTerm;
	let Carousel;
	let carousel;

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	$: {
		if (searchTerm) {
			const filteredPokemon = $pokemon.find((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);

			if (filteredPokemon) carousel.goTo(filteredPokemon.id - 1);
		}
	}
</script>

<svelte:component
	this={Carousel}
	bind:this={carousel}
	let:showPrevPage
	let:showNextPage
	dots={false}
>
	{#each $pokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</svelte:component>
