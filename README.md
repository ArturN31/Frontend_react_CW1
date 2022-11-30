# CW1 - Front-End Web Development (Cookery SPA)

## Deployed on heroku

[Click here to view](https://cw1.herokuapp.com/)

## How to run locally

Navigate to the app directory:\
`cd app`\

Install server dependencies:\
`npm i`\

Run script:\
`npm run heroku-postbuild`\
Navigates to client directory, installs dependencies and bundles the react app.\

Run the app:\
`npm start`\

Open [http://localhost:3001](http://localhost:3001) to view the react app in your browser.\
Open [http://localhost:3001/recipes](http://localhost:3001/recipes) to view the recipes in json format.

## Functionality/Implemented features

- Amount of displayed recipes select options (to limit the output).
- Recipe filtering by title and by ingredients, e.g., chicken breasts, salt, pepper, etc. (compares arrays)
- Calculation of entire dish nutrients, calculation of serving nutrients (single fetch for each recipe to lower the amount of get requests to external API).
- Included backend server that is used to fetch recipe data and insert reviews.
- Fetched data from backend is passed to child components to lower the amount of get requests.
- Calculation of fetched ratings and output.
- Output of fetched reviews - last 5 reviews in reversed order - newest review first.
- Client side routing to lower cognitive load. Minimizes amount of cards on screen.
- Adding recipes to shopping list and menu - local storage.
- Output of shopping list from local storage
- Shopping list - click ingredient to cross it out.
- Output of Menu from local storage.
