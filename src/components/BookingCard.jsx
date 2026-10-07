function BookingCard({ booking }) {
  const date = new Date(`${booking.date}T00:00:00`).toLocaleDateString(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="rounded-xl border border-ink/10 bg-white p-5 shadow-[0_3px_12px_rgba(32,53,44,0.03)] sm:p-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{date} <span className="px-1">|</span> {booking.time}</p>
          <h2 className="mt-2 font-display text-xl font-bold">{booking.room}</h2>
          <p className="mt-1 text-sm text-ink/60">Requested by {booking.studentName}</p>
        </div>
        <span className="w-fit rounded-full bg-[#fff2d9] px-3 py-1.5 text-xs font-bold text-[#835510]">{booking.status}</span>
      </div>
      <div className="mt-5 flex items-center gap-2 border-t border-ink/10 pt-4 text-sm text-ink/70">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-leaf text-xs font-bold text-forest" aria-hidden="true">{booking.studentCount}</span>
        {booking.studentCount === 1 ? '1 student' : `${booking.studentCount} students`}
      </div>
    </article>
  )
}

export default BookingCard