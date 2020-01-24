const db = require('../data/dbConfig');

module.exports = {
    addResource,
    findResources,
    addProject,
    findProjects,
    addTask,
    findTasks
};

function addResource(newResource) {
    return db("resource").insert(newResource);
}

function findResources() {
    return db("resource").select("*");
}

function addProject(newProject) {
    return db("project").insert(newProject);
}

function findProjects() {
    return db("project").select("*");
}

function addTask(newTask) {
    return db("task as t").insert(newTask);
}

function findTasks(projectID) {
    return db("task as t")
        .join("project as p", "p.id", "t.project_id")
        .where("p.id", projectID)
        .select("t.*", "p.name as project_name", "p.description as project_description")
}