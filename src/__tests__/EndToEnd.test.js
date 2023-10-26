import puppeteer, { Page } from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      //   headless: false,
      //   slowMo: 250,
      //   timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    // if your event's details have a different selector, use it instead of .event .details
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    await page.click(".event .detailsButton");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide details", async () => {
    await page.click(".event .detailsButton");
    const eventDetails = await page.$(".event .details");
    expect(eventDetails).toBeNull();
  });
});
describe("Filter Events by city", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
      //   timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn’t searched for a city, show upcoming events from all cities.", async () => {
    const eventlist = await page.$$eval(".event", (event) => event.length);
    expect(eventlist).toBe(32);
  });

  test("user can select a city from a list of suggestions when they search for a city. ", async () => {
    await page.type(".city", "Berlin");
    await page.click("ul > li:nth-child(1)");

    const CitySearch = await page.$eval(".city", (el) => el.value);

    expect(CitySearch).toBe("Berlin, Germany");
  });

  //Couldn't figure out how to evaluate with puppeteer, tested elsewhere though
  //   test("selected city matches list of events.", async () => {
  //     const CitySearch = await page.$eval(".city", (el) => el.value);

  //     //this should select the first event and its location class but it doesn't
  //     const eventCities = await page.$eval(".event .location", (el) => el.value);
  //     expect(eventCities).toBe(CitySearch);
  //   });
});

describe("Specify Number of Events", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 250,
      //   timeout: 0,
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });
  test("User has not specified different number of events yet", async () => {
    const eventlist = await page.$$eval(".event", (event) => event.length);
    expect(eventlist).toBe(32);
  });
  test("User types in a different number of events", async () => {
    //Because there is a default value, using $eval to delete the current value
    await page.$eval(".NumberOfEvents", (el) => (el.value = ""));
    await page.type(".NumberOfEvents", "10");

    const eventlist = await page.$$eval(".event", (event) => event.length);
    expect(eventlist).toBe(10);
  });
});
