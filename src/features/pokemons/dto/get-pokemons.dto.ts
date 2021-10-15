export interface GetPokemonsDto {
	count: number;
	next: string;
	previous: boolean;
	results: {
		name: string;
		url: string;
	}[];
}
