# MERN Mini Notes App

A simple Todo application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Pre-requisites](#pre-requisites)
- [Project Structure](#project-structure)
- [License](#license)

## Description

This Todo application allows users to create, read, update, and delete tasks. It utilizes a MERN stack architecture, with MongoDB as the database, Express.js for the backend, React.js for the frontend, and Node.js as the runtime environment.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Vinoth82003/MERN-Notes-App.git
```

2. Navigate to the project directory:

```bash
cd MERN-Notes-App
```

3. Install server and client dependencies:

```bash
npm install && npm install --prefix client
```

4. Create a `.env` file in the root directory and add the following values:

```
DB_URL=mongodb://localhost:27017/todoapp
PORT=5000
```

## Usage

To start the application, run the following command:

```bash
npm start
```

This command will concurrently start the server and the client. The server will be running on `http://localhost:5000`, and the client will be running on `http://localhost:3000`.

## Dependencies

The project relies on the following dependencies:

- **@fortawesome/free-brands-svg-icons**: Version ^6.5.1
- **cors**: Version ^2.8.5
- **dotenv**: Version ^16.4.5
- **express**: Version ^4.19.2
- **mongoose**: Version ^8.2.3

## Pre-requisites

Before running the project, make sure you have the following pre-requisites installed:

- **Node.js**: Download and install Node.js from [here](https://nodejs.org/)
- **MongoDB**: Download and install MongoDB from [here](https://www.mongodb.com/try/download/community)
- **MongoDB Compass**: MongoDB Compass is optional but recommended for database visualization. Download it from [here](https://www.mongodb.com/try/download/compass)

## Project Structure

- [Client README](client/README.md)
- [Server README](server/README.md)

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
