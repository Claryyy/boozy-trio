import { describe, expect, it } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";

import HomeHeader from "./HomeHeader.vue";

describe("HomeHeader test suite", () => {
  it("should display the Header with the correct text", async () => {
    const appTitle = "Boozy trio";
    const subtitle =
      "Discover 3 cocktails randomly selected for you and try them at home!";

    mount(HomeHeader);

    // Wait until the DOM updates.
    await flushPromises();

    expect(appTitle).toBeTruthy();
    expect(subtitle).toBeTruthy();
  });
});
