# Pokedex 

## Demo
![demo of pokedex](/public/pokedex-demo.gif)

## Notes
![graphqlerror](/public/graphql-heroku-error.png)
I received this error on 20.01.2022 so it difficult to test at the moment.

## Requirements
- [x] Must use latest version of Language/Framework of choice
- [x] Must use CSS/SCSS to style component (use of a CSS framework is allowed and encouraged)
- I decided on using a set of simple Ant Design components that provide basic styling.
- [x] Project should contain linting config
- [x] As a user I should be able to search for a pokemon
- [x] As a user I should be able to filter type
- I decided in order to implement this feature, was to have a dropdown of mapped types listed from each pokemon in the database and then removing any duplicates. A way I would improve this is using the `<select>` multiple attribute. While I did not have the time to do so, I would also have looked in implementing [memoizing with React.useMemo()](https://dmitripavlutin.com/react-usememo-hook/).
- [x] As a user I should be able to sort by name, type
- I initially placed the sorting functions all in the `PokemonContainer` and it was set as an empty array state, holding all of the pokemon and then performing the sort functions upon each load. I later refactored it so the sort by name and type functions were in the utils folder, and are called in sortedPokemon, where it takes the variable `filteredPokemon` (which is filtered by the searched name and type), as well as takes in the pokemon sorted by name or type as a boolean state now. 
- [x] As a user I would like to be able to favorite a number of pokemon and I would like those pokemon to persist in the browser (local is sufficient, no need for external APIs)
- For this to work, I initially did the way I usually wrote my method, which is calling passing the data as props. This works for the `Searchbar.js` component, but it was not working for myself. I realized that as I was passing the graphql query (called `{allPokemon}`), I could not pass down both the query and the props, which had to be passed onto the `PokemonContainer` in order to load and display the data. One solution was to completely remove the `PokemonCard` component, and have all the graphQL data called in `App.js`: `const { data: { allPokemon = [] } = {} } = useQuery(GET_POKEMON);` called in `PokemonContainer` instead to remove any use to passing props down. I decided to place the methods for adding favourite pokemon and storing the data as objects in local storage using `JSON.stringify()` in `PokemonCard`, and I access that data by accessing the data from local storage using `localStorage.getItem()` and using `JSON.parse` to convert the stored data back into an array of objects and mapping them out as a `PokemonCard`. I realize that with this method, I run into the issue of the card reloading everytime, and therefore resetting their state. I also run into the issue of the web app breaking if the user accesses that page immediately without adding any Pokemon to favourites (nor does the favourites page work in Incognito mode). I also had boolean states that would toggle between Adding and Removing from favourites so that users could not not add the same of one kind of Pokemon to the list, but I ran into issues when trying to load them in Favourites. Currently, the Favourites list filters out any duplicates, but it doesn't stop the list that is saved to localStorage growing exponentially large.
- [x] My favorites should be accessible on a different route
- [x] Use this API https://studio.apollographql.com/sandbox
- I was the most unfamiliar with graphQL and this [tutorial](https://www.youtube.com/watch?v=yKFoAF7J0mc) helped me understand how to get the data using apollo and setup graphql with a new React project.

## Nice to haves
- [x] Unit tests
- I have performed basic unit tests prior using toBe when writing `expect(result)` functions. For the sort functionalities in the `/utils` folder, I created a test using Jest and imported the two funcitons `byName` and `byType`. To test these functions, I manually added 2 pokemon objects per argument that checks to see if the pokemon objects in the array are sorted in the correct order according to its functionality. Additionally, I tested that if there are no pokemon listed, that an error should be thrown. I referenced the Jest documentation regarding [toStrictEqual](https://jestjs.io/docs/expect#tostrictequalvalue), as I was working on objects have the same types as well as structure. With more time, I would focus on restructuring the architecture of the project so that more functions would be able to be testable.
![testing with node and jest](/public/test-pokemon.png)
- [x] Show pokemon picture
- Using the query system from the graphql docs, I deduced that the best photo to use was the *front_default* photo
- [ ] Multi user (local) system
- [ ] Custom styling
- Something I was trying to work on was customising the colour of the types and each Pokemon Card header based on the Pokemon's main type. I attempted this using a switch-case statement, but then ran into crashes as this was trying to render over 100 pokemon and their respective types. I would spend more time working on asyncronously loading the data so once the cards displayed, the colours for each type would show on the tags/types and on the header card where the name of the Pokemon is displayed.
- [x] A favicon
[Click here](https://iconduck.com/icons/53043/pokemon) for icon source and licensing 
- [x] Github pages script and branch
[Deployed on Github pages](https://marishkazachariah.github.io/pokedex/) using [gh-pages](https://www.npmjs.com/package/gh-pages)