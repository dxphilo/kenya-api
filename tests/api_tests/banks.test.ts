import supertest from "supertest";
import app from "../../src/app";

describe("GET => /api/v1/banks", () => {
	before(() => {
		console.log("Server setup complete for banks tests");
	});

	it("Should return 200 and all banks when no query is passed", async () => {
		await supertest(app).get("/api/v1/banks").expect(200);
	});

	it("Should return 200 and only commercial banks", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ bank_type: "commercial" })
			.expect(200);
	});

	it("Should return 400 for invalid bank type", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ bank_type: "invalid-type" })
			.expect(400);
	});

	it("Should filter by bank_name", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ bank_name: "equity" })
			.expect(200);
	});

	it("Should filter by ussd only in commercial banks", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ ussd: "*224#" })
			.expect(200);
	});

	it("Should filter by paybill", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ paybill: "111777" })
			.expect(200);
	});

	it("Should return 404 when no bank matches the query", async () => {
		await supertest(app)
			.get("/api/v1/banks")
			.query({ bank_name: "nonexistent-bank" })
			.expect(404);
	});
});
