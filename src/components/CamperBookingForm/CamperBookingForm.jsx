import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import formStyles from "./CamperBookingForm.module.css";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import "react-datepicker/dist/react-datepicker.css";
import "./customDatePicker.css";

registerLocale("en-GB", enGB);

const CamperReservationForm = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Please enter your name"),
    emailAddr: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),
    reservationDate: Yup.date().required("Please select a date"),
    remarks: Yup.string(),
  });

  const initialFormValues = {
    fullName: "",
    emailAddr: "",
    reservationDate: "",
    remarks: "",
  };

  const formSubmitHandler = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 5000);
  };

  return (
    <div className={formStyles.camperFormWrapper}>
      <div className={formStyles.camperFormHeader}>
        <h3 className={formStyles.camperFormTitle}>Reserve Your Campervan</h3>
        <p className={formStyles.camperFormSubtitle}>
          Reach out—We are always here to assist you!
        </p>
      </div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={formSubmitHandler}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form className={formStyles.camperFormBody}>
            <div>
              <Field
                type="text"
                name="fullName"
                placeholder="Full Name*"
                className={formStyles.inputField}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className={formStyles.errorText}
              />
            </div>
            <div>
              <Field
                type="email"
                name="emailAddr"
                placeholder="Email Address*"
                className={formStyles.inputField}
              />
              <ErrorMessage
                name="emailAddr"
                component="div"
                className={formStyles.errorText}
              />
            </div>
            <div>
              <DatePicker
                selected={values.reservationDate}
                onChange={(date) => setFieldValue("reservationDate", date)}
                placeholderText="Select Date*"
                className={formStyles.inputField}
                calendarClassName="custom-datepicker"
                locale="en-GB"
                dateFormat="dd/MM/yyyy"
                formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3).toUpperCase()}
                minDate={new Date()}
              />
              <ErrorMessage
                name="reservationDate"
                component="div"
                className={formStyles.errorText}
              />
            </div>
            <div>
              <Field
                as="textarea"
                name="remarks"
                placeholder="Remarks"
                className={formStyles.inputField}
              />
              <ErrorMessage
                name="remarks"
                component="div"
                className={formStyles.errorText}
              />
            </div>
            <div className={formStyles.actionButton}>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {popupVisible && (
        <div className={formStyles.notificationBox}>
          <p className={formStyles.notificationText}>Form sent successfully!</p>
          <button onClick={() => setPopupVisible(false)} className={formStyles.dismissButton}>Dismiss</button>
        </div>
      )}
    </div>
  );
};

export default CamperReservationForm;