<h1 align="center">
  Portfolio Backend
</h1>

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

### This is the backend for my portfolio, built using NestJS. It provides APIs to manage the projects displayed in the frontend of the portfolio. The backend handles the creation, updating, retrieval, and deletion of projects.

## Features

- **CRUD Operations**: Create, read, update, and delete projects.
- **Validation**: Ensures data integrity using class-validator.
- **Database Integration**: Uses Prisma for database interactions.

## Starting the project
Clone the repository:
```cl
git clone https://github.com/AlexandreDresch/Portfolio-Server.git
```
Go to the project directory:
```cl
cd Portfolio-Server
```

Use **npm install** to install project dependencies.
<br />
Populate `.env` file based on `.env.EXAMPLE`.  
<br />
Then start the project.

```cl
npm run start
```

## API Endpoints
#### Create a Project
- URL: /projects
- Method: POST
- Request Body:
```json
{
  "name": "Project Name",
  "description": "Project Description",
  "done": true,
  "images": ["image1.jpg", "image2.jpg"],
  "deployment_url": "http://deployment.url",
  "github_url": "http://github.url",
  "date": "2023-06-22",
  "type": "ProjectType"
}
```
#### Get All Projects
- URL: /projects
- Method: GET
- Response:
```json
[
  {
    "id": 1,
    "name": "Project Name",
    "description": "Project Description",
    "done": true,
    "images": ["image1.jpg", "image2.jpg"],
    "deployment_url": "http://deployment.url",
    "github_url": "http://github.url",
    "date": "2023-06-22",
    "type": "ProjectType"
  }
]
```
#### Get a Project by Name
- URL: /projects/:name
- Method: GET
- Response:
```json
{
  "id": 1,
  "name": "Project Name",
  "description": "Project Description",
  "done": true,
  "images": ["image1.jpg", "image2.jpg"],
  "deployment_url": "http://deployment.url",
  "github_url": "http://github.url",
  "date": "2023-06-22",
  "type": "ProjectType"
}
```
#### Update a Project
- URL: /projects/:id
- Method: PATCH
- Request Body:
```json
{
  "name": "Updated Project Name",
  "description": "Updated Project Description",
  "done": true,
  "images": ["image1.jpg", "image2.jpg"],
  "deployment_url": "http://updated.deployment.url",
  "github_url": "http://updated.github.url",
  "date": "2023-06-23",
  "type": "UpdatedProjectType"
}
```
#### Delete a Project
- URL: /projects/:id
- Method: DELETE

## Technologies

-   [ ] NestJS
-   [ ] Typescript
-   [ ] Prisma
-   [ ] Class Validator
-   [ ] Class Transformer

<br />
