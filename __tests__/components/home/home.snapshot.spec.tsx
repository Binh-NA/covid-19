import renderer from "react-test-renderer";

import { HomeComponent } from "../../../src/components/homes/home";

describe("Home Component", () => {
  it("renders correctly", () => {
      const card = renderer.create(
        <HomeComponent />
      ).toJSON();
    expect(card).toMatchSnapshot();
  });
});

export {}