import { useState, useEffect } from "react";
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BookingConfirmed = () => {
    const localStorageItems = { ...localStorage };
    const [dateTimeObj, setDateTimeObj] = useState("");

    const getDateTime = () => {
        const date = JSON.parse(localStorageItems.date);
        const time = JSON.parse(localStorageItems.time);
        const dateTime = `${date} ${time}`;
        const dateTimeFormat = new Date(dateTime);
        console.log(dateTimeFormat);
        //return `${dateTimeFormat.toDateString()} ${dateTimeFormat.toTimeString()}`;
        return dateTimeFormat.toString()
    }
    useEffect(() => {
        //localStorage.clear();
        console.log('localStorageItems::', localStorageItems);
        const dateTimeFormat = getDateTime();
        setDateTimeObj(dateTimeFormat);
    }, [localStorageItems]);

  return (
    <div className="customersay primary2">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
      <p>You will receive an email with the following details.</p>
      <h5>{localStorageItems.occasion}</h5>
      <p>
        Table for {localStorageItems.guests} {localStorageItems.guests > 1 ? 'persons' : 'person'} on {dateTimeObj}<br></br>
        Comfirmation: #123UUDFE
      </p>
    </div>
  );
};

export default BookingConfirmed;