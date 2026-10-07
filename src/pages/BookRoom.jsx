import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BookingForm from '../components/BookingForm.jsx'
import rooms from '../data/rooms.js'

function BookRoom({ onBookingSubmit }) {
  const [searchParams] = useSearchParams()
  const [submittedBooking, setSubmittedBooking] = useState(null)

  function handleBookingSubmit(booking) {
    onBookingSubmit(booking)
    setSubmittedBooking(booking)
  }

  return (
    <section className="page-enter mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
      <div className="mb-7 max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest">Save a spot for your group</p>
        <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Book a room</h1>
        <p className="mt-2 text-sm leading-6 text-ink/60">Send a request for the room, date, and time that work for you.</p>
      </div>
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.1fr)_minmax(270px,0.75fr)] lg:items-start">
        <div className="rounded-xl border border-ink/10 bg-white p-5 shadow-[0_3px_12px_rgba(32,53,44,0.03)] sm:p-7">
          {submittedBooking && (
            <div className="mb-6 rounded-xl border border-[#c5dec8] bg-[#eff7ef] p-4" role="status">
              <p className="font-display font-bold text-forest">Booking request submitted</p>
              <p className="mt-1 text-sm text-ink/75">{submittedBooking.room} | {submittedBooking.date} at {submittedBooking.time} for {submittedBooking.studentCount} {submittedBooking.studentCount === 1 ? 'student' : 'students'}.</p>
              <Link to="/bookings" className="mt-3 inline-block text-sm font-bold text-forest underline decoration-forest/30 underline-offset-4 hover:text-ink">View My Bookings</Link>
            </div>
          )}
          <BookingForm rooms={rooms} initialRoom={searchParams.get('room') ?? ''} onSubmit={handleBookingSubmit} />
        </div>
        <aside className="rounded-xl bg-ink p-6 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Before you book</p>
          <h2 className="mt-3 font-display text-xl font-bold">A few helpful details.</h2>
          <ul className="mt-5 space-y-4 text-sm leading-6 text-white/75">
            <li className="flex gap-3"><span className="font-bold text-lime">01</span><span>Choose an available room that fits your group size.</span></li>
            <li className="flex gap-3"><span className="font-bold text-lime">02</span><span>Pick today or a future date and the start time you need.</span></li>
            <li className="flex gap-3"><span className="font-bold text-lime">03</span><span>Your request is saved in this session and appears in My Bookings.</span></li>
          </ul>
          <div className="mt-7 border-t border-white/15 pt-5 text-sm text-white/60">Need a room first? <Link to="/rooms" className="font-bold text-lime hover:text-white">Browse spaces &rarr;</Link></div>
        </aside>
      </div>
    </section>
  )
}

export default BookRoom