import BookingList from '../components/BookingList.jsx'

function MyBookings({ bookings }) {
  return (
    <section className="page-enter mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
      <div className="mb-7 flex flex-col justify-between gap-4 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest">Your requests, all together</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">My bookings</h1>
          <p className="mt-2 text-sm text-ink/60">Review the room requests you have submitted.</p>
        </div>
        <span className="w-fit rounded-full bg-leaf px-3.5 py-2 text-sm font-bold text-forest">{bookings.length} {bookings.length === 1 ? 'request' : 'requests'}</span>
      </div>
      <BookingList bookings={bookings} />
    </section>
  )
}

export default MyBookings