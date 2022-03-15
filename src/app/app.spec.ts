import superTest from "supertest";
import app from "./app";

describe("Express app", () => {
  it("should get a response in root", (done) => {
    superTest(app).get("/").expect("Content-Type", /json/).expect(200, done);
  });
});
