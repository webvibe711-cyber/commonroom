import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/rooms', label: 'Study Rooms' },
  { to: '/book', label: 'Book a Room' },
  { to: '/bookings', label: 'My Bookings' },
]

function Navbar({ bookingCount }) {
  return (
    <header className="border-b border-ink/10 bg-paper/95">
      <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-8">
        <div className="flex min-h-[76px] items-center justify-between gap-4">
          <NavLink to="/" className="shrink-0 font-display text-xl font-extrabold text-ink" aria-label="Commonroom home">
            commonroom<span className="text-coral">.</span>
          </NavLink>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.14em] text-ink/45 md:block">Campus spaces, made simple</span>
          <div className="hidden items-center gap-2 rounded-full border border-ink/10 px-3 py-2 text-xs font-semibold text-ink/65 sm:flex">
            <span className="h-2 w-2 rounded-full bg-forest" aria-hidden="true" />
            {bookingCount} {bookingCount === 1 ? 'request' : 'requests'}
          </div>
        </div>
        <nav aria-label="Main navigation" className="-mx-1 flex items-center gap-1 overflow-x-auto pb-3 sm:gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold transition-colors sm:px-4 ${isActive ? 'bg-ink text-white' : 'text-ink/65 hover:bg-ink/5 hover:text-ink'}`}
            >
              {link.label}
              {link.to === '/bookings' && bookingCount > 0 && <span className="ml-2 rounded-full bg-lime px-1.5 py-0.5 text-[11px] text-ink">{bookingCount}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar