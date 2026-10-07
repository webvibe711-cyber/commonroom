import BookingCard from './BookingCard.jsx'

function BookingList({ bookings }) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-ink/20 bg-white/60 px-6 py-14 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-leaf text-xl text-forest" aria-hidden="true">+</div>
        <h2 className="font-display text-lg font-bold">No bookings yet</h2>
        <p className="mt-1 text-sm text-ink/55">Your room requests will show up here.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {bookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)}
    </div>
  )
}

export default BookingList