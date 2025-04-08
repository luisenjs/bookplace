import { Review } from "./review";

export interface Libro {
    id: string;
    title: string;
    author: string;
    publisher: string;
    publishedYear: number;
    genre: string[];
    language: string;
    pages: number;
    summary: string;
    reviews: Review[];
    description: string;
    coverImage: string;
    rating: number;
    available: boolean;
    tags: string[];
}
