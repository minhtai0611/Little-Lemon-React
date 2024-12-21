/**
 * @file BookingFormHtmlAttributes.test.js
 * Tests specifically for HTML attributes in the BookingForm component
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm"; // adjust path as needed

// A mock for availableTimes, if needed
const mockAvailableTimes = {
  availableTimes: ["18:00", "18:30", "19:00"],
};

describe("BookingForm - HTML5 validation attributes", () => {
  test("renders minimum value of 1 for number of guests", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={() => {}} SubmitForm={() => {}} />);

    const guestsInput = screen.getByRole("spinbutton");
    expect(guestsInput).toHaveAttribute("min", "1");
  });

  test("renders placeholder text for the time dropdown", () => {
    render(<BookingForm availableTimes={mockAvailableTimes} dispatch={() => {}} SubmitForm={() => {}} />);


    expect(screen.getByText(/Select a Time/i)).toBeInTheDocument();
  });
  
});
