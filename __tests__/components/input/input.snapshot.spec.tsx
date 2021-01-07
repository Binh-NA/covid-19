import renderer from "react-test-renderer";

import { Input } from "../../../src/components/input/input";

describe("Input", () => {
  it("renders correctly", () => {
      const card = renderer.create(
        <Input
          value="aa"
          onChange={() => {}}
          option={{
            placeholder: "search",
            searchOptions: [
              {
                Country: "Country",
                Slug: "Country",
                ISO2: "Country"
              }
            ]
          }}
        />
      ).toJSON();
    expect(card).toMatchSnapshot();
  });

  it("renders Empty", () => {
    const card = renderer.create(
      <Input
        value="aa"
        onChange={() => {}}
        option={{
          placeholder: "search",
          searchOptions: []
        }}
      />
    ).toJSON();
    expect(card).toMatchSnapshot();
  });

  it("renders Null", () => {
    const card = renderer.create(
      <Input
        value="aa"
        onChange={() => {}}
        option={{
          placeholder: "search",
          icon: <></>,
          className: "cl-test"
        }}
      />
    ).toJSON();
    expect(card).toMatchSnapshot();
  });
});

export {}