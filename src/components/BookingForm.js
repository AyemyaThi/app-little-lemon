import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({availableTimes, dispatchOnDateChange, submitData}) => {

  const today = new Date().toISOString().split('T')[0];
  const availableTimesOptions = availableTimes.map((item, index) => {
      return <option data-testid="res-time-option" key={index} value={item}>{item}</option>;
  });

  const occasionType = ["Birthday", "Anniversary"];
  const occasionTypeOptions = occasionType.map((item) => {
    return <option data-testid="res-occasion-option" key={item}>{`${item}`}</option>;
  });

  const handleDateChange = (e) => {
    console.log('handleDateChange Reach');
    dispatchOnDateChange({ type: "updateTimes", date: e.target.value });
    formik.handleChange(e);
  };

  const bookingSchema = Yup.object().shape({
    date: Yup.string().required("Please choose a valid date."),
    time: Yup.string().required("Please choose a valid time."),
    guests: Yup.number()
    .min(1, "Please enter a number between 1 and 10.")
    .max(10, "Please enter a number between 1 and 10.")
    .required("Please enter a number between 1 and 10."),
    occasion: Yup.string().required("Please choose a occasion."),
  });

  const formik = useFormik({
    initialValues: {
      date: today,
      time: '',
      guests: 1,
      occasion: ''
    },
    validationSchema: bookingSchema,
    onSubmit: async ({ date, time, guests, occasion }, { setSubmitting }) => {
      submitData({ date, time, guests, occasion });
      // setTimeout(() => {
      //   const response = submitData({ date, time, guests, occasion });
      //   //alert(JSON.stringify(values, null, 2));
      //   if(response) {
      //     setSubmitting(false);
      //   }
      // }, 1000);

    },
  });

  useEffect(() => {
    //console.log('formik::', formik);
    //localStorage.clear();
  }, [formik]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ maxWidth: "300px", display: "grid", gap: "20px", padding: "3rem 0" }}
    >
      <label htmlFor="res-date">Choose Date</label>
      <input className={(formik.touched.date && formik.errors.date) && "invalid"}
        type="date"
        id="res-date"
        name="date"
        data-testid="res-date"
        min={today}
        {...{...formik.getFieldProps("date"), onChange: handleDateChange}}
      />
      {formik.touched.date && formik.errors.date ? (
        <span data-testid="error-res-date" className="error">{formik.errors.date}</span>
      ) : null}
      <label htmlFor="res-time">Choose Time</label>
      <select className={(formik.touched.time && formik.errors.time) && "invalid"} 
        id="res-time"
        name="time"
        {...formik.getFieldProps("time")}
        >
        <option value='' disabled>Select</option>
        {availableTimesOptions}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <span className="error">{formik.errors.time}</span>
      ) : null}
      <label htmlFor="guests">Number of Guests</label>
      <input className={(formik.touched.guests && formik.errors.guests) && "invalid"}
        type="number"
        placeholder=""
        min="1"
        max="10"
        id="guests"
        name="guests"
        data-testid="res-guests"
        {...formik.getFieldProps("guests")}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <span data-testid="error-res-guests" className="error">{formik.errors.guests}</span>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select className={(formik.touched.occasion && formik.errors.occasion) && "invalid"}
        id="occasion"
        name="occasion"
        data-testid="res-occasion"
        {...formik.getFieldProps("occasion")}
      >
        <option value='' disabled>Select</option>
        {occasionTypeOptions}
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <span className="error">{formik.errors.occasion}</span>
      ) : null}

      <button type="submit" className={(!(formik.isValid)) ? "noHover cta" : "cta"} disabled={!(formik.isValid)}>
        {(formik.isSubmitting) && <div className="loader"></div>}

        {/* {formik.isSubmitting ? (
          <div className="loader"></div>
        ) : null} */}
        <span style={{lineHeight: '2rem'}}>Make Your Reservation</span>
      </button>

    </form>

  );
};

export default BookingForm;
