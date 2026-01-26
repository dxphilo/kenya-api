import { assert } from "chai";
import sinon from "sinon";
import axios from "axios";
import {
	pingHealthEndpoint,
	healthCheckUrl,
} from "../../src/controllers/health_check";

// Define a type for the mocked Axios error to avoid `any`
interface MockAxiosError extends Error {
	isAxiosError: boolean;
	response?: { status: number; data: unknown };
	code?: string;
}

describe("Health Check Cron Job", () => {
	let axiosGetStub: sinon.SinonStub;
	let consoleLogSpy: sinon.SinonSpy;
	let consoleErrorSpy: sinon.SinonSpy;

	beforeEach(() => {
		// Stub axios.get before each test
		axiosGetStub = sinon.stub(axios, "get");
		// Spy on console methods
		consoleLogSpy = sinon.spy(console, "log");
		consoleErrorSpy = sinon.spy(console, "error");
	});

	afterEach(() => {
		// Restore original functions after each test
		sinon.restore();
	});

	it("should call axios.get and log success on successful ping", async () => {
		const mockResponse = { status: 200, data: "OK" };
		axiosGetStub.resolves(mockResponse);

		await pingHealthEndpoint();

		assert.isTrue(
			axiosGetStub.calledOnceWith(healthCheckUrl),
			"axios.get should be called with the health check URL",
		);
		assert.isTrue(
			consoleLogSpy.calledWithMatch("Running health check ping..."),
			"should log running health check",
		);
		assert.isTrue(
			consoleLogSpy.calledWithMatch(
				"Health check ping successful. Status: 200",
			),
			"should log successful ping",
		);
		assert.isFalse(
			consoleErrorSpy.called,
			"console.error should not be called",
		);
	});

	it("should log an Axios error on failed ping", async () => {
		const mockError = new Error("Network Error") as MockAxiosError;
		mockError.isAxiosError = true;
		mockError.response = { status: 500, data: "Server Error" };
		mockError.code = "ERR_NETWORK";
		axiosGetStub.rejects(mockError);

		await pingHealthEndpoint();

		assert.isTrue(
			axiosGetStub.calledOnceWith(healthCheckUrl),
			"axios.get should be called with the health check URL",
		);
		assert.isTrue(
			consoleLogSpy.calledWithMatch("Running health check ping..."),
			"should log running health check",
		);
		assert.isTrue(
			consoleErrorSpy.calledWithMatch(
				"Health check ping failed: Network Error",
			),
			"should log Axios error",
		);
		const loggedErrorObject = consoleErrorSpy.getCall(0).args[1];
		assert.deepEqual(
			loggedErrorObject,
			{ status: 500, data: "Server Error", code: "ERR_NETWORK" },
			"should log error details",
		);
	});

	it("should log a generic error on non-Axios failure", async () => {
		const mockError = new Error("Something unexpected happened");
		axiosGetStub.rejects(mockError);

		await pingHealthEndpoint();

		assert.isTrue(
			axiosGetStub.calledOnceWith(healthCheckUrl),
			"axios.get should be called with the health check URL",
		);
		assert.isTrue(
			consoleLogSpy.calledWithMatch("Running health check ping..."),
			"should log running health check",
		);
		assert.isTrue(
			consoleErrorSpy.calledWithMatch(
				"Health check ping failed with non-Axios error: Something unexpected happened",
			),
			"should log non-Axios error",
		);
	});

	it("should log an unknown error if the error is not an Error instance", async () => {
		const mockErrorValue = "just a string error";
		axiosGetStub.rejects(mockErrorValue);

		await pingHealthEndpoint();

		assert.isTrue(
			axiosGetStub.calledOnceWith(healthCheckUrl),
			"axios.get should be called with the health check URL",
		);
		assert.isTrue(
			consoleLogSpy.calledWithMatch("Running health check ping..."),
			"should log running health check",
		);
		assert.isTrue(
			consoleErrorSpy.calledWithMatch(
				"Health check ping failed with non-Axios error:",
			),
			"should log non-Axios error for string rejection",
		);
	});
});
