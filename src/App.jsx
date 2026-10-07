import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Rooms from './pages/Rooms.jsx'
import BookRoom from './pages/BookRoom.jsx'
import MyBookings from './pages/MyBookings.jsx'

function App() {
  const [bookings, setBookings] = useState([])

  function addBooking(booking) {
    setBookings((currentBookings) => [booking, ...currentBookings])
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar bookingCount={bookings.length} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/book" element={<BookRoom onBookingSubmit={addBooking} />} />
          <Route path="/bookings" element={<MyBookings bookings={bookings} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-ink/10 px-5 py-6 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="font-display font-bold text-ink">commonroom<span className="text-coral">.</span></span>
        <span>A little space to do your best work.</span>
        <span>Campus Study Room Booking System | Team 1</span>
      </footer>
    </div>
  )
}

export default App