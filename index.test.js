const maxSubArray = require("./index");

describe("UnitTests", function () {
  it("testName", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  it("testName1", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([1])).toBe(1);
  });
  it("testName2", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([0])).toBe(0);
  });
  it("testName3", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([-1])).toBe(-1);
  });
  it("testName4", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([-2, 1])).toBe(1);
  });
  it("testName5", function () {
    // Failure message:
    // This test has no failure messages
    expect(maxSubArray([-2, 1, 1, 2])).toBe(4);
  });
});
