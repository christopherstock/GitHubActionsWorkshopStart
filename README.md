# GitHub Actions
CI/CD-Pipeline with GitHub Actions for an Express.js REST-Server application.

# Pipeline Features
- Production Build and packaging via Webpack
- Unit-Tests with Coverage and XML-Report generation
- Code Inspection with ESLint and XML-Report generation
- JSDoc JavaScript sourcecode documentation generation
- GitHub Release creation on Git Tag push
- Dockerize, run and request Node.js application inside a Docker container

___

# 1. npm Targets

All npm targets can be run on your local machine.

## Install
Install all Node.js packages for this project
```
npm install
```

## Run
Start the Express.js server application:
```
npm start
```

## UI Tests
After starting your Express.js server application, you can open your browser on these two routes:
```
http://0.0.0.0:8181
http://0.0.0.0:8181/user
```

.. or perform a request using **cURL**:
```
curl -i http://0.0.0.0:8181
curl -i http://0.0.0.0:8181/user
```

## Integration Tests
This will invoke the Mocha test runner and invoke all integration tests:
```
npm test
```

## ESLint Code Inspection
This will invoke **eslint** on all app and test sources:
```
npm run eslint-scan
```

## JSDoc Code Documentation Generation
This will invoke **jsdoc** on all sources:
```
npm run jsdoc
```

## Build Release Artefact
This will invoke **webpack** and create the app release bundle:
```
npm run webpack-production
```
___

# 2. Docker

All docker commands can be run on your local machine.

## Build Docker Image
You can build a Docker image from the `Dockerfile` via this command.
The name and tag `app:14.18` is specified as an identifier for the new Docker image.
```
docker build . --tag express-js-app:14.18
```
Your newly created image with the name `express-js-app` and tag `14.18` should now be listed here:
```
docker images
```

## Run Docker Image    
Create and run a new Docker container from your Docker Image by specifying the tag name.
The port `8181` from inside the Docker container is published and mapped to the port `45678` on the host operating system.
```
docker run --detach --publish 45678:8181 --tty express-js-app:14.18
```

You should see this output from the container:
```
Start Express.js server on http://0.0.0.0:8181
```

## Connect to the Express.js Web App inside the container
Via Curl:
```
curl -i localhost:45678
curl -i localhost:45678/user
```
Latter will yield:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 135
ETag: W/"87-gHZz+1+n7pHvd2ovXSzGNYJ6RNM"
Date: Tue, 12 Oct 2021 19:16:02 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"name":"John Smith","username":"jsmith"},{"name":"Jane Williams","username":"jwilliams"},{"name":"Robert Brown","username":"rbrown"}]%                                                                  
```
