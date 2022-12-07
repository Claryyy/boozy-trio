import { afterEach, describe, expect, it, vi } from "vitest";
import fetchRandomCocktail from "./fetchRamdomCocktail";

const mockResolvedValue = {
  idDrink: "178364",
  strDrink: "Vodka Tonic",
  strDrinkAlternate: null,
  strTags: null,
  strVideo: null,
  strCategory: "Cocktail",
  strIBA: null,
  strAlcoholic: "Alcoholic",
  strGlass: "Highball glass",
  strInstructions:
    "Wash and cut 1 wedge and 1 slice of lime or lemon.\r\nFill a tumbler with fresh ice.\r\nPour the desired dose of vodka and top up with the tonic.\r\nSqueeze the lime wedge into the glass and decorate with the slice.\r\nThat's all, very simple: it's just the recipe for happiness!",
  strInstructionsES: null,
  strInstructionsDE:
    "1 Keil und 1 Limetten- oder Zitronenscheibe waschen und schneiden.\r\nF\u00fcllen Sie einen Tumbler mit frischem Eis.\r\nGie\u00dfen Sie die gew\u00fcnschte Dosis Wodka ein und f\u00fcllen Sie das Tonic auf.\r\nLimettenschnitz ins Glas dr\u00fccken und mit der Scheibe dekorieren.\r\nDas ist alles, ganz einfach: Es ist einfach das Rezept f\u00fcr Gl\u00fcck!",
  strInstructionsFR: null,
  strInstructionsIT:
    "Lavate e tagliate 1 spicchio e 1 fetta di lime o limone.\r\nColmate un tumbler con ghiaccio fresco.\r\nVersate la dose di vodka desiderata e colmate con la tonica.\r\nStrizzate lo spicchio di lime dentro il bicchiere e decorate con la fetta.\r\nTutto qui, molto semplice: \u00e8 solo la ricetta della felicit\u00e0!",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/9koz3f1643821062.jpg",
  strIngredient1: "Vodka",
  strIngredient2: "Tonic Water",
  strIngredient3: "Lemon Peel",
  strIngredient4: null,
  strIngredient5: null,
  strIngredient6: null,
  strIngredient7: null,
  strIngredient8: null,
  strIngredient9: null,
  strIngredient10: null,
  strIngredient11: null,
  strIngredient12: null,
  strIngredient13: null,
  strIngredient14: null,
  strIngredient15: null,
  strMeasure1: "4 cl",
  strMeasure2: "10 cl",
  strMeasure3: "1 Slice",
  strMeasure4: "",
  strMeasure5: "",
  strMeasure6: "",
  strMeasure7: "",
  strMeasure8: null,
  strMeasure9: null,
  strMeasure10: null,
  strMeasure11: null,
  strMeasure12: null,
  strMeasure13: null,
  strMeasure14: null,
  strMeasure15: null,
  strImageSource: "https://www.bernabei.it/media/mixology/vodka%20tonic.jpg",
  strImageAttribution: null,
  strCreativeCommonsConfirmed: "No",
  dateModified: null,
};

describe("fetchRandomCocktail function test suite", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should return a random cocktail when the function is called", () => {
    const mock = vi.fn().mockImplementation(fetchRandomCocktail);

    expect(mock()).toEqual(mockResolvedValue);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
