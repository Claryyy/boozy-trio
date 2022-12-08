import axios from "axios";
import { describe, expect, it, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";

import CocktailItem from "./CocktailItem.vue";

const mockAxiosResponse = {
  data: {
    drinks: [
      {
        idDrink: "13936",
        strDrink: "Miami Vice",
        strDrinkAlternate: null,
        strTags: "IBA",
        strVideo: null,
        strCategory: "Cocktail",
        strIBA: null,
        strAlcoholic: "Alcoholic",
        strGlass: "Cocktail glass",
        strInstructions:
          "First: Mix pina colada with 2.5 oz. of rum with ice(set aside). Second: Mix daiquiri with 2.5 oz. of rum with ice. Third: While frozen, add pina colda mix then daiquiri mix in glass (Making sure they do not get mixed together).",
        strInstructionsES: null,
        strInstructionsDE:
          "Zuerst: Pina Colada mit 7,5 cl. Rum und Eis mischen (beiseite legen). Zweitens: Daiquiri mit 7,5 cl. Rum und Eis mischen. Drittens: Im gefrorenen Zustand Pina Colda-Mix hinzuf\u00fcgen, dann Daiquiri in Glas mischen (Achten Sie darauf, dass sie nicht miteinander vermischt werden).",
        strInstructionsFR: null,
        strInstructionsIT:
          "Primo: mescola la pina colada con 75ml di rum con ghiaccio (mettere da parte).\r\nSecondo: mescola daiquiri con 75ml di rum con ghiaccio.\r\nTerzo: mentre \u00e8 freddo, aggiungi il mix di pina colada e poi i daiquiri nel bicchiere (assicurandoti che non si mescolino insieme).",
        "strInstructionsZH-HANS": null,
        "strInstructionsZH-HANT": null,
        strDrinkThumb:
          "https://www.thecocktaildb.com/images/media/drink/qvuyqw1441208955.jpg",
        strIngredient1: "151 proof rum",
        strIngredient2: "Pina colada mix",
        strIngredient3: "Daiquiri mix",
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
        strMeasure1: "5 oz Bacardi ",
        strMeasure2: "frozen ",
        strMeasure3: "frozen ",
        strMeasure4: null,
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strImageSource: null,
        strImageAttribution: null,
        strCreativeCommonsConfirmed: "No",
        dateModified: "2015-09-02 16:49:15",
      },
    ],
  },
};

describe("CocktailItem test suite", () => {
  it("should call axios when mounting the component and return the expected drink's information", async () => {
    //Arrange
    vi.spyOn(axios, "get").mockResolvedValue(mockAxiosResponse);

    //Act
    const wrapper = mount(CocktailItem);

    //Wait until the DOM updates.
    await flushPromises();

    const instructions = wrapper.findAll('[data-testid="instructions"]');

    //Assert
    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(wrapper.vm.randomCocktail.strDrink).toEqual(
      mockAxiosResponse.data.drinks[0].strDrink
    );
    expect(wrapper.vm.randomCocktail.strDrinkThumb).toEqual(
      mockAxiosResponse.data.drinks[0].strDrinkThumb
    );

    expect(instructions).toHaveLength(1);
    expect(instructions[0].text()).toContain(
      mockAxiosResponse.data.drinks[0].strInstructions
    );
  });
});
