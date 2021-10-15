<script lang="ts">
	import type { Pokemon } from 'features/pokemons/models/pokemon.model';

	export let pokemon: Pokemon;

	function capitalizeFirstLetter(name: string): string {
		return name.charAt(0).toUpperCase() + name.slice(1);
	}
</script>

<div class="bg-white w-full">
	<a
		href={`/pokemons/${pokemon.id}`}
		class="rounded shadow-small flex flex-col hover:outline-none hover:shadow-medium transition-shadow"
	>
		<div class="p-4 pb-6 flex flex-col justify-center items-center">
			<div class="flex">
				<img class="h-32 w-32" src={pokemon.image} alt={pokemon.name} />
			</div>
			<h3 class="text-sm text-black font-semibold leading-5">
				{capitalizeFirstLetter(pokemon.name)}
			</h3>
		</div>
	</a>
</div>
