const request = require("supertest");
const express = require("express");
const apiRouter = require("../routes/api");

const app = express();
app.use("/", apiRouter);

describe("Index Route", () => {
  test("responds to GET /", async () => {
    const res = await request(app).get("/nba");
    expect(res.statusCode).toBe(200);
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.text).toBe('{"message":"Hello from the custom server!"}');
  });

});
