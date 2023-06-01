# TodoReactApp
### Getting Started with React
This is my very first WebApp. It is about getting started with React.\
This simple web application allows you to create your own todos list and manage with each todo.\
The project demonstrates basic knowledgement on working with html, css, React, JSX, useState hook.\
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Demonstration
https://user-images.githubusercontent.com/82715902/212078125-4b55f990-7a9c-46cb-a763-86d121697d15.mp4

## Requirements
- installed Docker or NPM

## How to use
In project directory:
### To run the App with Docker:
1. Build the Docker image using the Dockerfile with cmd:
```sh
docker build -t todo-react-app .
```

2. Run the Docker container based on that image with cmd:
```sh
docker run -d -p 3000:3000 todo-react-app
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### To run the production build of the app:
1. Install [serve](https://github.com/vercel/serve) and let it handle the rest with cmd:
```sh
npm install -g serve
```

2. Start 'TodoReactApp' with cmd:
```sh
serve -s build
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### To run the app in the development mode:
1. Install all the dependencies according to 'package.json' file with cmd:
```sh
npm install
```

2. Start 'TodoReactApp' with cmd:
```sh
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
