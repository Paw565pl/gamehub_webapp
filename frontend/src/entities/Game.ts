import { Platform } from "./Platform";

export interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  background_image: string;
  metacritic: number;
  parent_platforms?: { platform: Platform }[];
}
