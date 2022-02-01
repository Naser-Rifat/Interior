import { render } from "@testing-library/react";
import ExploreProductDetails from "./ExploreProductDetails";

it("checkRenderButton", () => {
  const { queryByTitle } = render(<ExploreProductDetails />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const btn = queryByTitle("addToCart");
  expect(btn).toBeTruthy();
});
// describe("clickButton", () => {
//   it("onClick", () => {
//     const { queryByTitle } = render(<ExploreProductDetails />);
//     // eslint-disable-next-line testing-library/prefer-screen-queries
//     const btn = queryByTitle("addToCart");
//     expect(btn.innerHTML).toBe("Add to cart");
//     fireEvent.click(btn);
//     expect(btn.innerHTML).toBe("Added");
//   });
// });
