import { checkForName } from '../src/client/js/nameChecker' // import the js file into the test to test it

// The descripe function have the test descrebtion and the test suite
describe("Test the url valid", () => {

// We want to test the url is valid or not by checking the url format 
test("true if the url is valid", () => {
  const urls = [
    "https://www.name.com",
    "http://www.name.com",
  ];

  // to check it truthy
  urls.forEach((url) => {
    expect(checkForName(url)).toBeTruthy();
  });
});

// to check it falsy
test("False if the url is not valid", () => {
  expect(checkForName("name")).toBeFalsy();
});
});
