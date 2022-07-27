<script>
	import Nav from '../components/Nav.svelte';
	import '../styles/global.css';
</script>

<header class="p-4 max-w-6xl mx-auto">
	<Nav />
</header>
<main class="p-8 max-w-6xl mx-auto">
	<slot />
</main>
