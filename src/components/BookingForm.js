import { useFormik } from "formik";
import * as Yup from "yup";

const BookForm = (props) => {

  const occasionType = ["Birthday", "Anniversary"];

  const occasionTypeOptions = occasionType.map((item) => {
    return <option key={item}>{`${item}`}</option>;
  });

  const availableTimesOptions = props.availableTimes.map((item) => {
    return <option key={item} value={item}>{`${item}:00`}</option>;
  });

  const bookingSchema = Yup.object().shape({
    date: Yup.string().required("Required"),
    time: Yup.string().required("Required"),
    guests: Yup.number()
    .min(1, 'Mininum should be 1')
    .max(10, 'Maximum should be 10')
    .required("Required"),
    occasion: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      guests: 0,
      occasion: "Anniversary"
    },
    validationSchema: bookingSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
      // setSubmitting(true);
      // await sleep(500);
      // setSubmitting(false);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{ display: "grid", maxWidth: "400px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input className={(formik.touched.date && formik.errors.date) && "invalid"}
        type="date"
        id="res-date"
        name="date"
        {...formik.getFieldProps("date")}
      />
      {formik.touched.date && formik.errors.date ? (
        <div className="error">{formik.errors.date}</div>
      ) : null}
      <label htmlFor="res-time">Choose time</label>
      <select className={(formik.touched.time && formik.errors.time) && "invalid"} 
        id="res-time"
        name="time"
        {...formik.getFieldProps("time")}>
        {availableTimesOptions}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <div className="error">{formik.errors.time}</div>
      ) : null}
      <label htmlFor="guests">Number of guests</label>
      <input className={(formik.touched.guests && formik.errors.guests) && "invalid"}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        {...formik.getFieldProps("guests")}
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className="error">{formik.errors.guests}</div>
      ) : null}
      <label htmlFor="occasion">Occasion</label>
      <select className={(formik.touched.occasion && formik.errors.occasion) ? "custom-select invalid" : "custom-select" }
        id="occasion"
        name="occasion"
        {...formik.getFieldProps("occasion")}
      >
        {occasionTypeOptions}
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className="error">{formik.errors.occasion}</div>
      ) : null}

      <input type="submit" value="Make Your reservation"  disabled={formik.isSubmitting} />

    </form>
  );
};

export default BookForm;
