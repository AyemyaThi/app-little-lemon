import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import BookingConfirmed from './BookingConfirmed';


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/confirm" element={<BookingConfirmed />} />
            </Routes>
        </main>
    )
}

export default Main;