# NestJS + Puppeteer + EJS

This is an easy example of generating PDFs, invoice etc. using [NestJS](https://nestjs.com/), [Puppeteer](https://www.npmjs.com/package/puppeteer) and [EJS](https://www.npmjs.com/package/ejs) library

## Getting started

Install required libraries using either Yarn:

```
yarn add puppeteer
yarn add locate-chrome
yarn add ejs
```

or npm:

```
npm install puppeteer
npm install locate-chrome
npm install ejs
```

## Running the example:
  
  1. Clone the repo
  2. `cd nestjs-puppeteer-ejs`
  3. `yarn`
  4. `yarn run start:dev` or `yarn run start`
  5. Hit `POST` request on endpoint `localhost:3000/invoice` using body example givent in `/src/invoice/invoice.json` file

Example Template [Codesandbox](https://codesandbox.io/s/qgsze)
