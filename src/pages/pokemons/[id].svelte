<!-- <script context="module">
	import { getPokemonById } from 'src/stores/pokemon/pokemon.store';

	export async function load({ page, fetch, session, stuff }) {
		const id = page.params.id;
		return {
			props: {
				pokemon: await getPokemonById(id)
			}
		};
	}
</script> -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchById } from 'features/pokemons/pokemons.service';
	import type { Pokemon } from 'features/pokemons/models/pokemon.model';

	let id = $page.params.id;
	let pokemon: Pokemon = null;

	onMount(async () => {
		pokemon = (await fetchById(id)) as Pokemon;
		console.log(pokemon.name);
	});
</script>

<svelte:head>
	<title>Pokemons</title>
</svelte:head>

{#if pokemon}
	<h1 class="font-medium text-sm pt-2 pb-12">{pokemon.name}</h1>
{/if}
