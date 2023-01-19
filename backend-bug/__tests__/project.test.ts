import mongoose from "mongoose";
import { MongoClient } from "mongodb"
import ProjectModel from "../models/projectModel"
import { MongoMemoryServer } from "mongodb-memory-server"
import { describe, beforeAll, afterAll, it, expect } from "@jest/globals"

const validProjectData = {
    name: 'Test project',
    description: "First test",
    teamMembers: [],
    tickets: []
};


describe('Create a valid project', () => {

    beforeAll(async () => {
        const mongod = await MongoMemoryServer.create()
        const mongoUri: string = mongod.getUri()
        mongoose.set("strictQuery", false);
        await mongoose.connect(mongoUri);
    });
    afterAll(async () => {
        await mongoose.disconnect();
        await mongoose.connection.close();
    });


    it('Create a valid project', async () => {
        const savedUser = await ProjectModel.create(validProjectData);
        expect(savedUser.name).toBe(validProjectData.name);
        expect(savedUser.description).toBe(validProjectData.description);
        expect(savedUser.teamMembers).toStrictEqual(validProjectData.teamMembers);
    });

    it("Add a valid ticket to a valid project", async () => {
        const ticket = {
            author: "Samir",
            title: "Test ticket",
            description: "Inserting a test ticket",
            issueType: "Test",
            priority: "High",
            status: "In progress",
            timeCreated: "",
            comments: [
            ]
        }
        const projectName = { name: validProjectData.name }
        await ProjectModel.findOneAndUpdate(projectName, { $push: { tickets: ticket } })
        const updatedProject = await ProjectModel.findOne({ projectName })

        if (updatedProject) {
            expect(updatedProject.tickets[0].author).toStrictEqual(ticket.author)
            expect(updatedProject.tickets[0].title).toStrictEqual(ticket.title)
        } else {
            expect(updatedProject).toBeNull()
        }

    })
});