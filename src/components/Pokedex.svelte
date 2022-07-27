<script>
	import { onMount } from 'svelte';
	import { pokemon } from './../stores/pokestore.js';
	import PokemanCard from '../components/PokemanCard.svelte';
	import '../styles/pokedex.css';
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
		<div id="bigbluebutton" />
		<div id="barbutton1" />
		<div id="barbutton2" />
		<div id="cross">
			<div id="leftcross">
				<div id="leftT" />
			</div>
			<div id="topcross">
				<div id="upT" />
			</div>
			<div id="rightcross">
				<div id="rightT" />
			</div>
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
			<strong>Name:</strong>
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
