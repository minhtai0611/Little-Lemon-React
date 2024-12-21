import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

// Ant Design components
import { Form, DatePicker, Select, InputNumber, Button } from "antd";
import moment from "moment";

// Optional destructuring from antd
const { Option } = Select;

// 1) Define a validation schema using Yup
const BookingSchema = Yup.object().shape({
  date: Yup.string().required("Please choose a date"),
  time: Yup.string().required("Please select a time"),
  guests: Yup.number()
    .min(1, "At least 1 guest")
    .required("Please specify the number of guests"),
  occasion: Yup.string().required("Please choose an occasion"),
});

const BookingForm = (props) => {
  return (
    <Formik
      // 2) Specify initial form values
      initialValues={{
        date: "",
        time: "",
        guests: 1,
        occasion: "",
      }}
      // 3) Attach our validation schema
      validationSchema={BookingSchema}
      // 4) Submit handler
      onSubmit={(values, actions) => {
        // Force a re-validation
        actions.validateForm(values).then(errors => {
          if (Object.keys(errors).length === 0) {
            // No errors, go ahead
            props.SubmitForm(values);
          } else {
            // Show errors, don't navigate
            actions.setSubmitting(false);
          }
        });
      }}
      
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
        isSubmitting,
      }) => (
        // 5) Use Ant Design's Form component with layout props
        //    'onFinish' will trigger Formik's handleSubmit
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          style={{ maxWidth: 400, margin: "0 auto" }}
        >
          {/* Date Field */}
          <Form.Item
            label="Choose Date"
            validateStatus={touched.date && errors.date ? "error" : ""}
            help={touched.date && errors.date ? errors.date : ""}
          >
            <DatePicker
              // Convert the string in values.date into a Moment object if present
              value={
                values.date ? moment(values.date, "YYYY-MM-DD") : null
              }
              style={{ width: "100%" }}
              onChange={(date, dateString) => {
                setFieldValue("date", dateString);
                // If you need to dispatch the date to your reducer:
                props.dispatch(dateString);
              }}
            />
          </Form.Item>

          {/* Time Field */}
          <Form.Item
            label="Choose Time"
            validateStatus={touched.time && errors.time ? "error" : ""}
            help={touched.time && errors.time ? errors.time : ""}
          >
            <Select
              placeholder="Select a Time"
              value={values.time}
              onChange={(val) => setFieldValue("time", val)}
              style={{ width: "100%" }}
            >
              <Option value="">Select a Time</Option>
              {props.availableTimes.availableTimes?.map((availableTime) => (
                <Option key={availableTime} value={availableTime}>
                  {availableTime}
                </Option>
              ))}
            </Select>
          </Form.Item>

          {/* Guests Field */}
          <Form.Item
            label="Number of Guests"
            validateStatus={touched.guests && errors.guests ? "error" : ""}
            help={touched.guests && errors.guests ? errors.guests : ""}
          >
            <InputNumber
              min={1}
              value={values.guests}
              style={{ width: "100%" }}
              onChange={(val) => setFieldValue("guests", val)}
            />
          </Form.Item>

          {/* Occasion Field */}
          <Form.Item
            label="Occasion"
            validateStatus={touched.occasion && errors.occasion ? "error" : ""}
            help={touched.occasion && errors.occasion ? errors.occasion : ""}
          >
            <Select
              placeholder="Select an Occasion"
              value={values.occasion}
              onChange={(val) => setFieldValue("occasion", val)}
              style={{ width: "100%" }}
            >
              <Option value="">Select an Occasion</Option>
              <Option value="Birthday">Birthday</Option>
              <Option value="Anniversary">Anniversary</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={isSubmitting}
              block
            >
              Reserve Table
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
