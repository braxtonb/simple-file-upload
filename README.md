# Simple File Upload

## Overview

This is a simple file upload application.

The client is a `create-react-app` bootstrapped form that submits a `multipart/form-data` object to the server. This form submission includes an uploaded file.

The server leverages [multer](https://github.com/expressjs/multer) to store the file in the `server/public/media` directory. The server also hosts the static content saved to the `server/public/media`, allowing for subsequent GET requests for an uploaded file after successful form submission.

## Example

https://user-images.githubusercontent.com/13091519/133880515-1bb83fc2-fd8e-4d38-bd00-2f3388b7960a.mov

## Getting started

1. Run `chmod +rwx ./scripts/*` to permission yourself to run the `setup-local.sh` script
2. Run `./scripts/setup-local.sh` to install npm dependencies for the `client` and `server`
3. Run `docker-compose up` to start up the `client` and `server` dev docker containers

## Useful links

* [React](https://reactjs.org/)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* [Express.js](https://expressjs.com/)
* [Typescript](https://www.typescriptlang.org/)
* [multer](https://github.com/expressjs/multer)
* [msw](https://mswjs.io/)
