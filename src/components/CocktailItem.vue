<script lang="ts">
import axios from "axios";
import type { Drink } from "../../global.types";

export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      randomCocktail: {} as Drink,
    };
  },

  computed: {
    ingredients() {
      let count = 0;
      let allIngredients = Object.keys(this.randomCocktail).map((key) => {
        if (key.includes("strIngredient")) {
          count++;
          return {
            ingredient: this.randomCocktail[key],
            measure: this.randomCocktail[`strMeasure${count}`]?.trim(),
          } as any;
        }
      });
      console.log(allIngredients);
      return allIngredients.filter((x) => !!x?.ingredient);
    },
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event listeners in templates.
  methods: {
    async fetchRandomCocktail() {
      const response = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      if (response.data) {
        this.randomCocktail = response.data?.drinks[0];
      }
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    this.fetchRandomCocktail();
  },
};
</script>

<template :data="drinks">
  <div class="card" :key="randomCocktail.idDrink">
    <div class="image">
      <img
        :src="randomCocktail.strDrinkThumb"
        :alt="`A picture of a cocktail called ${randomCocktail.strDrink}`"
      />
    </div>
    <div class="details">
      <h3>
        <slot name="heading">{{ randomCocktail.strDrink }}</slot>
      </h3>
      <h4>
        {{ randomCocktail.strAlcoholic }} | {{ randomCocktail.strCategory }} |
        Served in a
        {{ randomCocktail.strGlass }}
      </h4>

      <div id="drinkrecipe" class="recipe">
        <div class="ingredients">
          <h6>Ingredients</h6>

          <li v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient.measure }} {{ ingredient.ingredient }}
          </li>
        </div>
        <div class="instructions">
          <h6>Instructions</h6>
          <span>
            <p>{{ randomCocktail.strInstructions }}</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.4rem;
}

@media (min-width: 500px) and (max-width: 1023px) {
  .card {
    grid-template-columns: 1fr 2fr;
  }
}

@media (min-width: 1024px) {
  .card {
    grid-template-columns: 1fr;
  }
}

.image img {
  width: 100%;
}

.recipe {
  display: flex;
}

.ingredients {
  flex: 1;
}

.instructions {
  flex: 1;
}

h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
  color: var(--color-heading);
}

h4 {
  font-style: italic;
  font-weight: 500;
  margin-bottom: 0.2rem;
}

h6 {
  font-size: 1rem;
  font-weight: 400;
  color: #c7ef00;
}
</style>
