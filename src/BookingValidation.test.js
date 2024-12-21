/**
 * @file bookingValidation.test.js
 * Tests the Yup validation schema by itself
 */
import * as Yup from "yup";
import { BookingSchema } from "../src/component/booking/BookingForm"; // adjust if exported from BookingForm

describe("BookingForm Yup validation schema", () => {
  test("validates correct data without errors", async () => {
    const validData = {
      date: "2023-12-31",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };
    await expect(BookingSchema.validate(validData)).resolves.toBeTruthy();
  });

  test("throws error if date is empty", async () => {
    const invalidData = {
      date: "",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    };
    await expect(BookingSchema.validate(invalidData)).rejects.toThrow(
      /Please choose a date/i
    );
  });

  test("throws error if guests < 1", async () => {
    const invalidData = {
      date: "2023-12-31",
      time: "18:00",
      guests: 0,
      occasion: "Anniversary",
    };
    await expect(BookingSchema.validate(invalidData)).rejects.toThrow(
      /At least 1 guest/i
    );
  });
});
