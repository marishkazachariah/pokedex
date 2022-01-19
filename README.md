# Pokedex 

## Requirements
- [x] Must use latest version of Language/Framework of choice
- [x] Must use CSS/SCSS to style component (use of a CSS framework is allowed and encouraged)
- I decided on using a set of simple Ant Design components that provide basic styling.
- [x] Project should contain linting config
- [x] As a user I should be able to search for a pokemon
- [x] As a user I should be able to filter type
I decided in order to implement this feature, was to have a dropdown of mapped types listed from each pokemon in the database and then removing any duplicates. A way I would improve this is using the `<select>` multiple attribute. 
- [x] As a user I should be able to sort by name, type
I initially placed the sorting functions all in the `PokemonContainer` and it was set as an empty array state, holding all of the pokemon and then performing the sort functions upon each load. I later refactored it so the sort by name and type functions were in the utils folder, and are called in sortedPokemon, where it takes the variable `filteredPokemon` (which is filtered by the searched name and type), as well as takes in the pokemon sorted by name or type as a boolean state now. 
- [ ] As a user I would like to be able to favorite a number of pokemon and I would like those pokemon to persist in the browser (local is sufficient, no need for external APIs)
- [x] My favorites should be accessible on a different route
- ✅ Use this API https://studio.apollographql.com/sandbox
I was the most unfamiliar with graphQL and this [tutorial](https://www.youtube.com/watch?v=yKFoAF7J0mc) helped me understand how to get the data using apollo and setup graphql with a new React project.

## Nice to haves
- [x] Unit tests
I have performed basic unit tests prior using toBe when writing `expect(result)` functions. For the sort functionalities in the `/utils` folder, I created a test using Jest and imported the two funcitons `byName` and `byType`. To test these functions, I manually added 2 pokemon objects per argument that checks to see if the pokemon objects in the array are sorted in the correct order according to its functionality. Additionally, I tested that if there are no pokemon listed, that an error should be thrown. I referenced the Jest documentation regarding [toStrictEqual](https://jestjs.io/docs/expect#tostrictequalvalue), as I was working on objects have the same types as well as structure.
![testing with node and jest](/public/test-pokemon.png)
- [x] Show pokemon picture
Using the query system from the graphql docs, I deduced that the best photo to use was the *front_default* photo
- Multi user (local) system
- Custom styling
- [x] A favicon
[Click here](https://iconduck.com/icons/53043/pokemon) for icon source and licensing 
- [x] Github pages script and branch
[Deployed on Github pages](https://marishkazachariah.github.io/pokedex/) using [gh-pages](https://www.npmjs.com/package/gh-pages)