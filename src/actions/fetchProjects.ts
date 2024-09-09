"use server";

import clientPromise from "@/db/db";

export async function fetchProjects() {
    if (clientPromise) {
        const client = await clientPromise;
        const db = client.db("Portfolio_Db");
        const projects = db.collection("Projects");

        if (!projects) {
            await db.createCollection("Projects");
        } else {
            const allProjects = await projects.find({}).toArray();
            console.log(allProjects);
            return allProjects;
        }
    }
}

export async function fetchProjectsById(projectId: number) {
    
    if (clientPromise) {
        const client = await clientPromise;
        const db = client.db("Portfolio_Db");
        const projects = db.collection("Projects");

        if (!projects) {
            await db.createCollection("Projects");
        } else {
            const selectedProject = await projects.findOne({ id: projectId });
            console.log(selectedProject);
            return selectedProject;
        }
    }
}