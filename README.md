# SHORTURL

This is the front-end app to short URLs. The project was deployed on Railway. Go to [https://short-url-production-db35.up.railway.app](https://short-url-production-db35.up.railway.app)

Go to [shorturl-api](https://github.com/AFBGdev/shorturl-api) to see the back-end app and API.


The Stack that I used in this project are:

- Node v22.11.0
- [pnpm](https://pnpm.io/installation)
- Vite
- React.js v18.3.1
- TypeScript v5.6.2
- TailwindCSS v3.4.15
- Vitest
- Jest

## Run project

### Set .env file

Duplicate the `.env.example` and create the `.env` file, then set the `VITE_API_URL` variable with the API URL

```
// Example

VITE_API_URL="http://localhost:8000/api/v1"
```

### Run app

To run the project locally. Just run the next commands in your terminal

```
pnpm install
pnpm run dev
```

> **Note:** Click [here](https://pnpm.io/installation) if you need to install pnpm.

### Test

There are some tests in this project using *Vitest* and *Jest*. To run these, just run:

```
pnpm run test
```