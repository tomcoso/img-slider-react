import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Slider from "..";
import IndexBtns from "../components/IndexBtns";

describe("functions correctly", () => {
  const imgArray = ["1", "2", "3", "4", "5"];

  test("slides forwards", () => {
    const user = userEvent.setup();
    render(<Slider images={imgArray} />);

    const nextBtn = screen.getAllByRole("button")[1];
    const main = screen.getByRole("img");
    const nextSlide = screen.getByTestId("next-slide");
    expect(main).toHaveStyle("background-image: 1");
    expect(nextSlide).toHaveStyle("background-image: 2");

    user.click(nextBtn);

    expect(main).toHaveStyle("background-image: 2");
    expect(nextSlide).toHaveStyle("background-image: 3");
  });

  test("slides backwards", () => {
    const user = userEvent.setup();
    render(<Slider images={imgArray} />);

    const prevBtn = screen.getAllByRole("button")[0];
    const main = screen.getByRole("img");
    const prevImg = screen.getByTestId("prev-slide");
    expect(main).toHaveStyle("background-image: 1");
    expect(prevImg).toHaveStyle("background-image: 5");

    user.click(prevBtn);

    expect(main).toHaveStyle("background-image: 5");
    expect(prevImg).toHaveStyle("background-image: 4");
  });

  test("index buttons change image index", async () => {
    const user = userEvent.setup();

    let index = 0;
    const mockFn = jest.fn((x) => {
      index = x;
    });

    render(
      <IndexBtns imageArray={imgArray} currentIndex={index} setIndex={mockFn} />
    );

    const btnArray = screen.getAllByTestId("index-btn");

    await user.click(btnArray[2]);

    expect(mockFn).toHaveBeenCalled();
    expect(index).toBe(2);

    await user.click(btnArray[4]);

    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(index).toBe(4);
  });
});
