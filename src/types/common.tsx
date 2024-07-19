
interface CastMember {
    name: string;
    role: string;
}

export type MovieType = {
    id: number;
    title: string;
    release_year: number;
    genre: string[];
    director: string;
    cast: CastMember[];
    rating: number;
    duration_minutes: number;
    synopsis: string;
    thumbnail_horizontal: string;
    thumbnail_vertical: string;
}