import { handleSubmit } from '../src/client/js/formHandler' // import the js file into the test to test it

// The descripe function have the test descrebtion and the test suite
describe("Test submit", () => {
  test("test that it should be exist", () => {
    expect(handleSubmit).toBeDefined(); // to check if the system print the expected output
  }),
  //test function have the test descrebtion and a test
    test("test that it should be function ", () => {
      expect(typeof handleSubmit).toBe("function");
    });
});
