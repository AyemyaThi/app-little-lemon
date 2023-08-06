import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import BookingPage from './components/BookingPage';
import BookingForm from './components/BookingForm';

describe('Booking page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('renders Booking page', async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/Booking/i);
    expect(linkElement).toBeInTheDocument();

    const timeOptions = await screen.findAllByTestId('res-time-option');
    expect(timeOptions.length).toBeGreaterThanOrEqual(1);

    timeOptions.forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );

  });

  test('should update available booking time options when changing booking date', async() => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const bookingDate = '2023-08-10';
    const dateInput = screen.getByLabelText(/Choose Date/);

    const initialTimeOptions = await screen.findAllByTestId('res-time-option');
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);

    const updatedTimeOptions = await screen.findAllByTestId('res-time-option');
    expect(dateInput).toHaveValue(bookingDate);

    initialTimeOptions.slice(1).forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );

    updatedTimeOptions.slice(1).forEach(timeOption =>
      expect(timeOption.value).toMatch(timeFormat)
    );

    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });


});

describe('Booking Form', () => {
  const availableTimes = ['17:00', '17:30'];
  const today = new Date().toISOString().split('T')[0];
  const dispatchOnDateChange = jest.fn();
  const submitData = jest.fn();

  test('For all fields in form', async () => {
    render(
      <BookingForm availableTimes={availableTimes} submitData={submitData} />
    );

    const dateInput = screen.getByLabelText(/Choose Date/);
    const timeSelect = screen.getByLabelText(/Choose Time/);
    const timeOptions = await screen.findAllByTestId('res-time-option');
    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId(`res-occasion-option`);
    const submitButton = screen.getByRole('button');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'res-date');
    expect(dateInput).toHaveValue(today);

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'res-time');
    expect(timeOptions.length).toBe(2);

    expect(numberOfGuestsInput).toBeInTheDocument();
    expect(numberOfGuestsInput).toHaveAttribute('id', 'guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionOptions.length).toBe(2);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });


  test('Submit form with default values', async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const dateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(dateInput, { target: { value: today } });

    const timeSelect = screen.getByLabelText(/Choose Time/);
    fireEvent.change(timeSelect, { target: { value: availableTimes[0] } });

    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: 1 } });

    const occasionSelect = screen.getByLabelText(/Occasion/);
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    await waitFor(() => expect(submitData).toHaveBeenCalledTimes(1));
  });

  test(`should display an error message and disable sumbit button when date field's value is empty`, async () => {
    render(
      <BrowserRouter>
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      </BrowserRouter>
    );

    const dateInput = screen.getByLabelText(/Choose Date/);
    fireEvent.change(dateInput, { target: { value: '' } });
    fireEvent.blur(dateInput);
    await waitFor(() => {
      const errorMessage = screen.getByTestId('error-res-date');
      const submitButton = screen.getByRole('button');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please choose a valid date');
      expect(submitButton).toBeDisabled();
    });
  });

  test(
    `should display an error message and disable sumbit button when number of
    guests field's value is empty`, async () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
    fireEvent.blur(numberOfGuestsInput);

    await waitFor(() => {
      const errorMessage = screen.getByTestId('error-res-guests');
      const submitButton = screen.getByRole('button');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please enter a number between 1 and 10');
      expect(submitButton).toBeDisabled();
    });
  });

});
