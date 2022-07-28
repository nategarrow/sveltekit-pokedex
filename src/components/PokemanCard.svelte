<script>
	export let pokeman;
	import { fade } from 'svelte/transition';
</script>

<a
	href={`/pokemon/${pokeman.id}`}
	class="card p-2 bg-gray-100 text-gray-800 text-center rounded-md flex flex-col items-center mb-2"
>
	<img src={pokeman.image} alt={pokeman.name} />
</a>

<style>
	.card {
		background: white;
	}
	.card img {
		height: 100%;
		object-fit: contain;
		width: 100%;
		transform: scale(1.3);
	}
</style>
