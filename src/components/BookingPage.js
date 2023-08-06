import { useState, useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import BookingForm from "./BookingForm";

const initializeTimes = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "updateTimes":
      console.log('R state:', state);
      return [...fetchAPI(new Date(action.date))];
      break;

    case "initializeTimes":
      return [...state, ...action.date ];
      break;

    default:
      return initializeTimes;
  }
};

const BookingPage = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLocalStored, setIsLocalStored] = useState(false);
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes);

  const updateLocalStorgeData = (formData) => {
    Object.entries(formData).forEach(([key, value]) => {
      console.log(`${key} ${value}`);
      localStorage.setItem(key, JSON.stringify(value));
    });
    setIsLocalStored(true);
  }

  const submitData = formData => {
    const response = submitAPI(formData);
    if (response) {
      setIsSubmitted(true);
      updateLocalStorgeData(formData);
      console.log('Submit::', response);
    }
  };

  useEffect(() => {
    if(isLocalStored) {
      navigate("/confirm");
    }
  }, [isLocalStored]);

  useEffect(() => {
    const response = fetchAPI(new Date());
    if(response.length !== 0) {
      console.log(response);
      dispatch({ type: "initializeTimes", date: response });
    }
  }, []);

  return (
    <article className="cards">
      <section>
        <h1 className="primary2 mt-0 mb-0">Booking</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatch}
          submitData={submitData}
        />
      </section>
    </article>
  );
};

export default BookingPage;
