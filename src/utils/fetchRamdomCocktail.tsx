import axios from "axios";

export default async function fetchRandomCocktail() {
  const response = await axios.get(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  if (response.data) {
    return response.data?.drinks[0];
  }
}
