<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	import { fetchById } from '../shared/pokemons.service';
	import type { Pokemon } from '../shared/pokemon.model';

	let id = $page.params.id;
	let pokemon: Pokemon = null;

	onMount(async () => {
		pokemon = (await fetchById(id)) as Pokemon;
		console.log(pokemon.name);
	});
</script>

<svelte:head>
	<title>Pokemon Details</title>
</svelte:head>

{#if pokemon}
	<h1 class="font-medium text-sm pt-2 pb-12">{pokemon.name}</h1>
{/if}
