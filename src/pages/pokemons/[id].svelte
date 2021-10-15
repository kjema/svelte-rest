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
	import Pokemon from 'features/pokemons/pokemon/pokemon.svelte';
</script>

<Pokemon />
