import renderer from "react-test-renderer";

import { SearchComponent } from "../../../src/components/search/search";

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

describe("SearchComponent", () => {
  it("renders correctly", () => {
      const card = renderer.create(
        <SearchComponent search="aaa" />
      ).toJSON();
    expect(card).toMatchSnapshot();
  });
});

export {}