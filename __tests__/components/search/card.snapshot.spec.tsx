import renderer from "react-test-renderer";

import { Card } from "../../../src/components/search/card";

const country = {
  Country: "VN",
  CountryCode: "VN",
  Slug: "vn",
  NewConfirmed: 1,
  TotalConfirmed: 2,
  NewDeaths: 3,
  TotalDeaths: 4,
  NewRecovered: 5,
  TotalRecovered: 6,
  Date: "29/09/2020",
  Premium: {
    CountryStats: {
      CountryISO: "CountryISO",
      Country: "Country",
      Continent: "Continent",
      Population: 1,
      PopulationDensity: 2,
      MedianAge: 3,
      Aged65Older: 4,
      Aged70Older: 5,
      ExtremePoverty: 6,
      GdpPerCapita: 7,
      CvdDeathRate: 8,
      DiabetesPrevalence: 9,
      HandwashingFacilities: 10,
      HospitalBedsPerThousand: 11,
      LifeExpectancy: 12,
      FemaleSmokers: 13,
      MaleSmokers: 14,
    },
  },
}

describe("Card Component", () => {
  it("renders correctly", () => {
      const card = renderer.create(
        <Card country={{
          Country: "Country",
          CountryCode: "CountryCode",
          Lat: 1,
          Lon: 2,
          Confirmed: 3,
          Deaths: 4,
          Recovered: 5,
          Active: 6,
          Date: "Date",
          LocationID: "LocationID"
        }} />
      ).toJSON();
    expect(card).toMatchSnapshot();
  });
});

export {}