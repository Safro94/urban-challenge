# Urban Coding Challenge

## Description

This project was built for a coding challenge. The client is a CRA React + Typescript application. This project uses Styled Components for the styles.

## Folder structure

    root
      ├── public
      │
      ├── src
      │    ├── assets
      │    ├── components
      │    ├── constants
      │    ├── containers
      │    ├── hooks
      │    ├── pages
      │    ├── services
      │    ├── theme
      │    ├── types
      │    ├── utils
      │    └── index.tsx
      │
      └── README.md

## Stack

### Client

    - React
    - Typescript
    - Styled Components
    - Jest + React testing library

## How to start

### Clone

You can clone the repo using this url: https://github.com/Safro94/urban-challenge

```
git clone https://github.com/Safro94/urban-challenge.git
```

### Install dependencies

Install dependencies

```
cd urban-challenge
```

Run

```
npm install
```

Add .env file with this keys

```
REACT_APP_SERVER_URL=https://storage.googleapis.com/urban-technical
```

To run the project and run

```
npm start
```

The application should be running in http://localhost:3000

## Test

The application uses Jest + React testing library. You can run this command to run the tests.

```
npm test
```

to run the tests or

```
npm run coverage
```

if you want to check the code coverage.

## Technical decisions

See this [file](https://github.com/Safro94/urban-challenge/blob/master/docs/decisions.md).
