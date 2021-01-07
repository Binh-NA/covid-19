import renderer from "react-test-renderer";

import { OptionSearch } from "../../../src/components/input/option-search";

describe("Option Search", () => {
  it("renders correctly", () => {
      const card = renderer.create(
        <OptionSearch 
          countries={[
            {
              Country: "Country",
              Slug: "Country",
              ISO2: "Country"
            }
          ]} 
          onClick={() => {}}
        />
      ).toJSON();
    expect(card).toMatchSnapshot();
  });

  it("renders Empty", () => {
    const card = renderer.create(
      <OptionSearch 
        countries={[]} 
        onClick={() => {}}
      />
    ).toJSON();
  expect(card).toMatchSnapshot();
});
});

export {}