import { writable } from 'svelte/store';

import type { GetPokemonsDto } from './get-pokemons.dto';
import type { Pokemon } from './pokemon.model';

export const pokemons = writable<Pokemon[]>([]);

const url = new URL('https://pokeapi.co/api/v2/pokemon');

function transformToPokemon(data: GetPokemonsDto) {
	return data.results.map((p, index) => ({
		id: index + 1,
		name: p.name,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
			index + 1
		}.png`
	}));
}

export async function fetchAll(): Promise<Pokemon[]> {
	url.searchParams.set('limit', '150');

	const request = new Request(url.href);
	const response = await fetch(request, { method: 'GET' });

	if (!response.ok) return Promise.reject('fetch failed');

	const data: GetPokemonsDto = await response.json();

	return transformToPokemon(data);
}

export async function fetchById(id: number | string): Promise<unknown> {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}
