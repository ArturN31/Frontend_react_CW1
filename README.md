# CW1 - Front-End Web Development

## Available Scripts

### Backend - api

Ensure to install dependencies:
`npm i`

To launch the server:
`node index` or `nodemon index`

Runs the server in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.\
Open [http://localhost:3001/recipes](http://localhost:3001/recipes) to view recipes in json format.

### Frontend - react

Ensure to install dependencies:
`npm i`

To launch react:
`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Functionality/Implemented features

- Amount of displayed recipes select options (to limit the output).
- Recipe filtering by title and by ingredients, e.g., chicken breasts, salt, pepper, etc. (compares arrays)
- Calculation of entire dish nutrients, calculation of serving nutrients. (single fetch for each recipe to minimize 502 errors)
- Included backend server that is used to fetch recipe data, insert rating and reviews.
- Calculation of fetched ratings and output.
- Output of fetched reviews - last 5 reviews in reversed order - newest review first.
- Client side routing to lower cognitive load. Minimizes amount of cards on screen.
- Adding recipes to shopping list and menu - local storage.
- Output of shopping list from local storage
- Shopping list - click ingredient to cross it out.
- Output of Menu from local storage.
