jest.mock("node-fetch");

const fetch = require("node-fetch");
const { Response } = jest.requireActual("node-fetch");

const request = require("supertest");
const express = require("express");
const nbaRouter = require("../routes/api/nba");
const balldontlieResponse = require("./testData/balldontlieResponse");

const app = express();
app.use("/", nbaRouter);

fetch.mockResolvedValue(new Response(JSON.stringify(balldontlieResponse)));

describe("NBA Route", () => {
  test("responds to GET /", async () => {
    const res = await request(app).get("/");
    expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
    expect(res.statusCode).toBe(200);
    expect(res.text).not.toBeUndefined();
  });
});
