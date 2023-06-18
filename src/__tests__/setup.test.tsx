import React from "react";

import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Slider from "../Slider";

describe("renders correctly", () => {
  beforeEach(() => {
    const images = ["1", "2", "3", "4", "5"];
    render(<Slider images={images} />);
  });

  test("renders Wrapper correctly", () => {
    expect(screen.getByTestId("images")).toBeInTheDocument();
    expect(screen.getByTestId("indexes")).toBeInTheDocument();
  });

  test("renders Images correctly", () => {
    expect(screen.getAllByRole("button")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("button")[1]).toBeInTheDocument();

    const prevSlide = screen.getByTestId("prev-slide");
    expect(prevSlide).toBeInTheDocument();
    expect(prevSlide).toHaveStyle("background-image: 5");

    const nextSlide = screen.getByTestId("next-slide");
    expect(nextSlide).toBeInTheDocument();
    expect(nextSlide).toHaveStyle("background-image: 2");

    const main = screen.getByRole("img");
    expect(main).toBeInTheDocument();
    expect(main).toHaveStyle("background-image: 1");
  });

  test("renders IndexBtns correctly", () => {
    const btnArray = screen.getAllByTestId("index-btn");
    const style = "border: 1px solid white";

    expect(btnArray.length).toBe(5);
    expect(btnArray[0]).toHaveClass("current");
  });
});
