# VE Compiler Container

## Overview
This Docker container is designed to run a variety of compilers including C, C++, Python, Java, and JavaScript. It also includes a custom server built using Node.js and Express, which allows you to compile code via an HTTP API.

The VE Compiler 2.0 is included to handle the compilation of code, and the container exposes an API to compile code in multiple languages.

## Features
- Supports multiple programming languages: C, C++, Python, Java, JavaScript.
- API for compiling code via HTTP requests.
- Simple to set up and use with Docker.
- Built with Node.js, Express, and VE Compiler 2.0.

## How to Use

### 1. Build the Docker Container
To build the Docker image, run the following command in the root directory of your project (where the `Dockerfile` is located):

```bash
docker build -t eshan04dev/ve-compiler-container .
```

### 2. Run the Docker Container
Once the image is built, you can run the container with the following command:

```bash
docker run -p 4000:4000 eshan04dev/ve-compiler-container
```

This will run the container and expose the server on port `4000`.

### 3. Access the API
The container exposes the following HTTP endpoints:

- **`POST /compile-code`**: Use this endpoint to compile code by sending a JSON request with the `code` and `language`.

  Example request:
  ```json
  {
    "code": "print('Hello, world!')",
    "language": "py"
  }
  ```

  Example response:
  ```json
  {
    "output": "Hello, world!"
  }
  ```

- **`GET /health`**: Use this endpoint to check if the server is running. It returns a `200 OK` status with a timestamp.

  Example response:
  ```json
  {
    "status": "server is running",
    "timestamp": "2024-12-25T12:34:56Z"
  }
  ```

## Installation

### 1. Install Docker
Ensure Docker is installed on your machine. You can download Docker from [here](https://www.docker.com/get-started).

### 2. Pull the Image from Docker Hub
If you don't want to build the image yourself, you can pull the pre-built image from Docker Hub:

```bash
docker pull eshan04dev/ve-compiler-container
```

### 3. Run the Container
Run the pulled image:

```bash
docker run -p 4000:4000 eshan04dev/ve-compiler-container
```

