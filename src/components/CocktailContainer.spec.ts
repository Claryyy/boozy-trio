import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import CocktailContainer from "./CocktailContainer.vue";

describe("CocktailContainer test suite", () => {
  it("should display 3 cocktails when mounted", async () => {
    //Arrange
    const drink1 = "cocktail1";
    const drink2 = "cocktail2";
    const drink3 = "cocktail3";

    const wrapper = mount(CocktailContainer);
    const cocktail1 = wrapper.find(`[data-testid=${drink1}]`);
    const cocktail2 = wrapper.find(`[data-testid=${drink2}]`);
    const cocktail3 = wrapper.find(`[data-testid=${drink3}]`);

    expect(cocktail1).toBeTruthy();
    expect(cocktail2).toBeTruthy();
    expect(cocktail3).toBeTruthy();
  });
});
