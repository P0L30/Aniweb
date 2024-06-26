// apiService.ts
import axios from "axios";
import { ReactNode } from "react";

const API_URL = "https://kitsu.io/api/edge/trending/anime";
const GENRE_URL = "https://kitsu.io/api/edge/anime/1/genres";

export interface Genre {
  id: string;
  attributes: {
    name: string;
  };
}

export interface Anime {
  id: string;
  attributes: {
    name: ReactNode;
    canonicalTitle: string;
    synopsis: string;
    posterImage: {
      small: string;
      medium: string;
      large: string;
      original: string;
    };
  };
}

export const fetchAnimeGenre = async (): Promise<Genre[]> => {
  try {
    const response = await axios.get(GENRE_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetchong anime genre", error);
    throw error;
  }
};

export const fetchTrendingAnime = async (): Promise<Anime[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching trending anime:", error);
    throw error;
  }
};
