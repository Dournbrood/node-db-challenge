const express = require('express');

const Database = require('./schema/projects-model');

const server = express();

server.use(express.json());

server.post("/api/resources", (request, response) => {
    Database.addResource(request.body)
        .then((thing) => {
            response.status(200).json({ message: "ok then", stuff: thing })
        })
        .catch((error) => {
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

server.get("/api/resources", (request, response) => {
    Database.findResources()
        .then((thing) => {
            response.status(200).json({ ...thing })
        })
        .catch((error) => {
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

server.post("/api/projects", (request, response) => {
    Database.addProject(request.body)
        .then((thing) => {
            response.status(200).json({ message: "ok then", stuff: thing })
        })
        .catch((error) => {
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

server.get("/api/projects", (request, response) => {
    Database.findProjects()
        .then((thing) => {
            response.status(200).json({ ...thing })
        })
        .catch((error) => {
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

server.post("/api/tasks", (request, response) => {
    Database.addTask(request.body)
        .then((thing) => {
            response.status(200).json({ message: "ok then", stuff: thing })
        })
        .catch((error) => {
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

server.get("/api/tasks", (request, response) => {
    Database.findTasks(request.body.project_id)
        .then((thing) => {
            response.status(200).json({ ...thing })
        })
        .catch((error) => {
            console.log(error);
            response.status(500).json({
                message: "Internal error! Please harass everyone on this project until it's fixed!",
                errorDetails: error,
            })
        })
})

module.exports = server;