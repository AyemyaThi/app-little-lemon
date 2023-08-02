import BookingForm from "./BookingForm";

const BookingPage = () => {
    const availableTimes = [17, 18, 19, 20, 21, 22];
    return (
        <article>
           <section>
            <h1>Booking page</h1>
            <BookingForm availableTimes={availableTimes} />
           </section>
        </article>
    )
}

export default BookingPage;