import request from "supertest";
import app from "../app";

import createConnection from './../database/index';

describe("Surverys", () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('should be able to create a new survery', async () => {
    const response = await request(app).post("/surverys").send({
      title: "Title Example",
      description: "Description Example",
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should be able to get all surverys', async () => {
    await request(app).post("/surverys").send({
      title: "Title Example 2",
      description: "Description Example 2",
    });

    const response = await request(app).get("/surverys")

    expect(response.body).toHaveLength(2);
  });
});
