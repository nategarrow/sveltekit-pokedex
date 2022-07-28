<script>
	import { onMount } from 'svelte';
	import { pokemon } from './../stores/pokestore.js';
	import PokemanCard from '../components/PokemanCard.svelte';
	import '../styles/pokedex.css';
	export let searchTerm;
	let Carousel;
	let carousel;
	let thisPokemon = $pokemon[0];

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	$: {
		thisPokemon = $pokemon[0];
		if (searchTerm) {
			const filteredPokemon = $pokemon.find((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);

			if (filteredPokemon) carousel.goTo(filteredPokemon.id - 1);
		}
	}
</script>

<div id="pokedex">
	<div id="left">
		<div id="logo" />
		<div id="bg_curve1_left" />
		<div id="bg_curve2_left" />
		<div id="curve1_left">
			<div id="buttonGlass">
				<div id="reflect" />
			</div>
			<div id="miniButtonGlass1" />
			<div id="miniButtonGlass2" />
			<div id="miniButtonGlass3" />
		</div>
		<div id="curve2_left">
			<div id="junction">
				<div id="junction1" />
				<div id="junction2" />
			</div>
		</div>
		<div id="screen">
			<div id="topPicture">
				<div id="buttontopPicture1" />
				<div id="buttontopPicture2" />
			</div>
			<div id="picture">
				<svelte:component
					this={Carousel}
					bind:this={carousel}
					let:showPrevPage
					let:showNextPage
					infinite={false}
					on:pageChange={(e) => {
						thisPokemon = $pokemon[e.detail];
					}}
					dots={false}
				>
					{#each $pokemon as pokeman}
						<PokemanCard {pokeman} />
					{/each}
				</svelte:component>
			</div>
			<div id="buttonbottomPicture" />
			<div id="speakers">
				<div class="sp" />
				<div class="sp" />
				<div class="sp" />
				<div class="sp" />
			</div>
		</div>
		{#if thisPokemon}
			<a id="bigbluebuttonLink" href={`/pokemon/${thisPokemon.id}`}><div id="bigbluebutton" /></a>
		{:else}
			<div id="bigbluebutton" />
		{/if}
		<div id="barbutton1" />
		<div id="barbutton2" />
		<div id="cross">
			<button id="leftcross" on:click={() => carousel.goToPrev()}>
				<div id="leftT" />
			</button>
			<div id="topcross">
				<div id="upT" />
			</div>
			<button id="rightcross" on:click={() => carousel.goToNext()}>
				<div id="rightT" />
			</button>
			<div id="midcross">
				<div id="midCircle" />
			</div>
			<div id="botcross">
				<div id="downT" />
			</div>
		</div>
	</div>
	<div id="right">
		<div id="stats">
			<div id="top-stats">
				{#if thisPokemon}
					<strong class="text-lg">ID: {thisPokemon.id}</strong><br />
					<strong class="text-lg">Name: {thisPokemon.name}</strong><br />
				{:else}
					<strong class="text-2xl text-gray-600">LOADING...</strong>
				{/if}
			</div>
			<div id="btm-stats">
				<p class="text-xs">(Use the controls below the image to cycle Pokémon)</p>
			</div>
		</div>
		<div id="blueButtons1">
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
		</div>
		<div id="blueButtons2">
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
			<div class="blueButton" />
		</div>
		<div id="miniButtonGlass4" />
		<div id="miniButtonGlass5" />
		<div id="barbutton3" />
		<div id="barbutton4" />
		<div id="yellowBox1" />
		<div id="yellowBox2" />
		<div id="bg_curve1_right" />
		<div id="bg_curve2_right" />
		<div id="curve1_right" />
		<div id="curve2_right" />
	</div>
</div>
