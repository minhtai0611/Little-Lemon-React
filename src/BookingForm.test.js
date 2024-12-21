// BookingForm.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm"; 

test("renders a static heading in the BookingForm", () => {
  render(<BookingForm />);
  // If your form actually displays "Book Now"
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
