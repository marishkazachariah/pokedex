# Requirements
- ✅ Must use latest version of Language/Framework of choice
- ✅ Must use CSS/SCSS to style component (use of a CSS framework is allowed and encouraged)
- I decided on using a set of simple Ant Design components that provide basic styling.
- ✅ Project should contain linting config
- ✅ As a user I should be able to search for a pokemon
- ✅ As a user I should be able to filter type
I decided in order to implement this feature, was to have a dropdown of mapped types listed from each pokemon in the database and then removing any duplicates. A way I would improve this is using the `<select>` multiple attribute. 
- ✅ As a user I should be able to sort by name, type
I initially placed the sorting functions all in the PokemonContainer and it was set as an empty array state, holding all of the pokemon and then performing the sort functions upon each load. I later refactored it so the sort by name and type functions were in the utils folder, and are called in sortedPokemon, where it takes the var filteredPokemon (which is filtered by the searched name and type), as well as takes in the pokemon sorted by name or type as a boolean state now. 
- As a user I would like to be able to favorite a number of pokemon and I would like those pokemon to persist in the browser (local is sufficient, no need for external APIs)
- My favorites should be accessible on a different route
- ✅ Use this API https://studio.apollographql.com/sandbox
I was the most unfamiliar with graphQL and this [tutorial](https://www.youtube.com/watch?v=yKFoAF7J0mc) helped me understand how to get the data using apollo and setup graphql with a new React project.
# Nice to haves
- Unit tests
- ✅ Show pokemon picture
Using the query system from the graphql docs, I deduced that the best photo to use was the *front_default* photo
- Multi user (local) system
- Custom styling
- ✅ A favicon
[Click here](https://iconduck.com/icons/53043/pokemon) for icon source and licensing 
- ✅ Github pages script and branch
[Deployed on Github pages](https://marishkazachariah.github.io/pokedex/) using [gh-pages](https://www.npmjs.com/package/gh-pages)