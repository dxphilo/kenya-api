import { expect } from "chai";
import sinon from "sinon";
import axios, { AxiosError } from "axios";
import { pingHealthEndpoint } from "../../src/app"; // Adjust path as needed

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
    const expectedUrl =
      process.env.HEALTH_CHECK_URL ||
      "https://kenya-api.onrender.com/api/v1/health";
    const mockResponse = { status: 200, data: "OK" };
    axiosGetStub.resolves(mockResponse);

    await pingHealthEndpoint();

    expect(axiosGetStub.calledOnceWith(expectedUrl)).to.be.true;
    expect(consoleLogSpy.calledWithMatch("Running health check ping...")).to.be
      .true;
    expect(
      consoleLogSpy.calledWithMatch("Health check ping successful. Status: 200")
    ).to.be.true;
    expect(consoleErrorSpy.called).to.be.false;
  });

  it("should log an Axios error on failed ping", async () => {
    const expectedUrl =
      process.env.HEALTH_CHECK_URL ||
      "https://kenya-api.onrender.com/api/v1/health";
    // Use type assertion `as` after creating the base Error
    const mockError = new Error("Network Error") as MockAxiosError;
    mockError.isAxiosError = true;
    mockError.response = { status: 500, data: "Server Error" };
    mockError.code = "ERR_NETWORK";
    axiosGetStub.rejects(mockError);

    await pingHealthEndpoint();

    expect(axiosGetStub.calledOnceWith(expectedUrl)).to.be.true;
    expect(consoleLogSpy.calledWithMatch("Running health check ping...")).to.be
      .true;
    expect(
      consoleErrorSpy.calledWithMatch("Health check ping failed: Network Error")
    ).to.be.true;
    // Check the logged object separately for clarity
    const loggedErrorObject = consoleErrorSpy.getCall(0).args[1];
    expect(loggedErrorObject).to.deep.equal({
      status: 500,
      data: "Server Error",
      code: "ERR_NETWORK",
    });
  });

  it("should log a generic error on non-Axios failure", async () => {
    const expectedUrl =
      process.env.HEALTH_CHECK_URL ||
      "https://kenya-api.onrender.com/api/v1/health";
    const mockError = new Error("Something unexpected happened");
    axiosGetStub.rejects(mockError);

    await pingHealthEndpoint();

    expect(axiosGetStub.calledOnceWith(expectedUrl)).to.be.true;
    expect(consoleLogSpy.calledWithMatch("Running health check ping...")).to.be
      .true;
    expect(
      consoleErrorSpy.calledWithMatch(
        "Health check ping failed with non-Axios error: Something unexpected happened"
      )
    ).to.be.true;
  });

  it("should log an unknown error if the error is not an Error instance", async () => {
    const expectedUrl =
      process.env.HEALTH_CHECK_URL ||
      "https://kenya-api.onrender.com/api/v1/health";
    const mockError = "just a string error"; // Not an instance of Error
    axiosGetStub.rejects(mockError);

    await pingHealthEndpoint();

    expect(axiosGetStub.calledOnceWith(expectedUrl)).to.be.true;
    expect(consoleLogSpy.calledWithMatch("Running health check ping...")).to.be
      .true;
    expect(
      consoleErrorSpy.calledWithMatch(
        "Health check ping failed with unknown error:",
        "just a string error"
      )
    ).to.be.true;
  });
});
