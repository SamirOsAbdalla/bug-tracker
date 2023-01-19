import mongoose from "mongoose";
import { MongoClient } from "mongodb"
import UserModel from "../models/userModel"
import { MongoMemoryServer } from "mongodb-memory-server"
import { describe, beforeAll, afterAll, it, expect } from "@jest/globals";
const validUserData = { name: 'Samir', email: "samir@gmail.com", password: "samir's password", isAdmin: false };
const invalidUserData = { name: 'Samir', email: "samir@gmail.com", password: "samir's password", isAdmin: "false" };

describe('Create users', () => {

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

    it('create & save user successfully', async () => {

        const savedUser = await UserModel.create(validUserData);
        expect(savedUser.name).toBe(validUserData.name);
        expect(savedUser.email).toBe(validUserData.email);
        expect(savedUser.isAdmin).toBe(validUserData.isAdmin);
    });

    it('Fail to create a user with wrong type', async () => {

        try {
            const savedUser = await UserModel.create(invalidUserData);
        }
        catch (error: any) {
            expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
        }
    });
});