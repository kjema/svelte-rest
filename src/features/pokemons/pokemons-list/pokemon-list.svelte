<!-- <script context="module" lang="ts">
	export async function load({ page, fetch, session, stuff }) {

  }
</script> -->
<script lang="ts">
	import { onMount } from 'svelte';

	import PokemonCard from '../shared/pokemon-card.svelte';
	import type { Pokemon } from '../shared/pokemon.model';
	import * as pokemonService from '../shared/pokemons.service';

	let isLoading = true;
	let pokemons: Pokemon[] = [];
	let searchTerm = '';

	$: filteredPokemons = getFilteredPokemons(pokemons, searchTerm);

	// $: {
	// 	filteredPokemons = getFilteredPokemons(searchTerm);
	// 	console.log(filteredPokemons.length);
	// }

	onMount(async () => {
		pokemons = await pokemonService.fetchAll();
		isLoading = false;
	});

	function getFilteredPokemons(pokemons: Pokemon[], filterKey: string) {
		return pokemons.filter((pokemon) =>
			// Object.values(pokemon).some((s) => String(s).toLowerCase().includes(filterKey.toLowerCase()))
			pokemon.name.toLowerCase().includes(filterKey.toLowerCase())
		);
	}
</script>

<svelte:head>
	<title>Pokemons</title>
</svelte:head>

<h1 class="font-medium text-sm pt-2 pb-12">Pokédex</h1>
<input
	class="mb-6 bg-white rounded px-3 h-10 border border-solid w-[528px]"
	type="text"
	placeholder="Search"
	bind:value={searchTerm}
/>

<!-- <pre>{JSON.stringify(pokemons,null,2)}</pre> -->

<!-- {#await getPokemons()}
	<p>waiting for the promise to resolve...</p>
{:then pokemons}
	<div class="grid grid-cols-4 gap-12">
		{#each pokemons as pokemon, _index (pokemon.id)}
			<PokemonCard {pokemon} />
		{/each}
	</div>
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await} -->

{#if isLoading === true}
	<p>Loading...</p>
{:else}
	<div class="grid grid-cols-4 gap-12">
		{#each filteredPokemons as pokemon, _index (pokemon.id)}
			<PokemonCard {pokemon} />
		{/each}
	</div>
{/if}
