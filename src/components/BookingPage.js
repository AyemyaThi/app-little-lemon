import BookingForm from "./BookingForm";
import { useState, useEffect, useReducer } from "react";
import { fetchAPI, submitAPI } from '../utils/fakeAPI';

const initializeTimes = [];

  const reducer = (state, action) => {
    switch (action.type) {
      case "updateTimes":
        console.log('R state:', state);
        return [[], ...fetchAPI(new Date(action.date))];
        break;

      case "initializeTimes":
        return [...state, ...action.date ];
        break;

      default:
        return initializeTimes;
    }
  };

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) {
      console.log('Submit DD::', response);
      //alert(response);
      //alert(JSON.stringify(response, null, 2));
      //navigate(pages.get('confirmedBooking').path);
    }
  };

const BookPage = () => {

  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);

  useEffect(() => {
    const response = fetchAPI(new Date());
    if(response.length !== 0) {
      console.log(response);
      dispatch({ type: "initializeTimes", date: response });
    }
  }, []);

  // useEffect(() => {
  //   dispatch({ type: "initializeTimes" });
  // }, []);

  return (
    <>
      <h1>Booking</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatch}
        submitData={submitData}
      />
    </>
  );
};

export default BookPage;
