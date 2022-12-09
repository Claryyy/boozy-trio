# Boozy trio

An app that will let you discover 3 cocktails randomly sleected and all the instructions to make it at home.
Build using the data from free public API [TheCocktailDB](https://www.thecocktaildb.com/).

This app has been built using Vue3 + Vite, TypeScript and Vitest.

## This app is hosted on Netlify

You can access this app at the following URL: [https://wondrous-biscochitos-8eb655.netlify.app](https://wondrous-biscochitos-8eb655.netlify.app).

## To run this app via Docker (recommended)

First, make sure you have Docker installed and running

To build the Docker image of this app run:
`docker build -t vade/dockerize-vuejs-app .`

Finally, let’s run this app in a Docker container:
`docker run -it -p 8080:80 --rm --name dockerize-vuejs-app-1 vade/dockerize-vuejs-app`

You should be able to access the app on localhost:8080.

## Other commands

Clone down the GitHub project and run the following commands `npm install` followed by `npm run dev` to run the code in dev mode.

For the production build, run `npm run build`.

For Lint run `npm run lint`.

### Comments

This was my first time using Vue and it's been an interesting challenge to build this app in a few days.
I created the app using the `npm init vue@latest` command to get setup with all the files needed.

I then took some time to read the Vue docs and wrap my head around the way components are written in Vue (scripts, style and template are in the same file). It makes for a folder structure that is much cleaner.

I then took some time to refine the UI and styles for the different breakpoints.

For unit testing, I used Vitest as recommend by the Vue3 docs.

I then created a Dockerfile.
