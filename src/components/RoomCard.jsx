import { Link } from 'react-router-dom'

function RoomCard({ room }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-5 shadow-[0_3px_12px_rgba(32,53,44,0.03)] transition-transform hover:-translate-y-0.5">
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-ink/45">{room.building}</p>
          <h2 className="font-display text-xl font-bold">{room.name}</h2>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${room.available ? 'bg-leaf text-forest' : 'bg-[#fce9e4] text-[#a54432]'}`}>
          <span className={`mr-1 inline-block h-1.5 w-1.5 rounded-full ${room.available ? 'bg-forest' : 'bg-[#a54432]'}`} aria-hidden="true" />
          {room.available ? 'Available' : 'Occupied'}
        </span>
      </div>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
        <div>
          <p className="text-sm font-semibold">Up to {room.capacity} people</p>
          <p className="mt-1 text-xs text-ink/55">{room.detail}</p>
        </div>
        {room.available ? (
          <Link to={`/book?room=${encodeURIComponent(room.name)}`} className="rounded-lg bg-ink px-3.5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-forest focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2">
            Book room <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : (
          <span className="rounded-lg bg-paper px-3.5 py-2.5 text-sm font-semibold text-ink/45">Not available</span>
        )}
      </div>
    </article>
  )
}

export default RoomCard