// This is a unit/integration test for your Recipes API, specifically testing the endpoint:

/*

Jest (main testing framework)
Used for writing and running the test cases.
Provides functions like describe(), test(), expect(), and lifecycle hooks like afterAll().

This test validates that the /recipes/:id endpoint returns a properly structured response with all necessary fields for a specific recipe. It ensures the endpoint behaves as expected and reduces the risk of bugs in production.

*/




import request from "supertest";
import { server, startServer, stop } from "../src/index";

afterAll(() => {
  stop();
});

describe("Recipes API Endpoints", () => {
  test("GET /recipes/:id", async () => {

    const res = await request(server).get("/recipes/1");

    // The response should have a status code of 200

    expect(res.statusCode).toEqual(200);

    // The response body must have a data object

    expect(res.body.data).toBeTruthy();

    // The data object must have an id
    
    expect(res.body.data.id).toBeTruthy();
    
    // The data object must have a title

    expect(res.body.data.title).toBeTruthy();

    // The data object must have an array on ingredients that is a string

    expect(res.body.data.ingredients).toBeTruthy();

    // The data object must have an instructions string

    expect(res.body.data.instructions).toBeTruthy();

    // The data object must have an image string

    expect(res.body.data.image).toBeTruthy();

    return;
  })
})