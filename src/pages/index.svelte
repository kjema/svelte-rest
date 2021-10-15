<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async () => {
		goto(`/pokemons`, { replaceState: true });
	});
</script>
