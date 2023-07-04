import Genre from "./Genre";
import Platform from "./Platform";
import Publisher from "./Publisher";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  metacritic: number;
  parent_platforms?: { platform: Platform }[];
}
