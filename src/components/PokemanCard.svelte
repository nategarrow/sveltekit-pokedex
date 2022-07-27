<script>
	export let pokeman;
	import { fade } from 'svelte/transition';
</script>

<a
	transition:fade={{ duration: 240 }}
	href={`/pokemon/${pokeman.id}`}
	class="card p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:bg-gray-300 hover:shadow-md flex flex-col items-center mb-2"
>
	<img src={pokeman.image} alt={pokeman.name} />
	<h2>{pokeman.id}. {pokeman.name}</h2>
</a>

<style>
	.card {
		background: white;
	}
</style>
