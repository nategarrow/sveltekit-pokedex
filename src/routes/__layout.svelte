<script>
	import { fade } from 'svelte/transition';
	import '../styles/global.css';
</script>

<main class="p-8 max-w-6xl mx-auto" transition:fade>
	<slot />
</main>
