import { Link } from 'react-router-dom'

const features = [
  { number: '01', title: 'Find your fit', text: 'Filter campus spaces by room name or building, then check capacity before you go.' },
  { number: '02', title: 'Make it official', text: 'Send a booking request in a few quick steps, with the details all in one place.' },
  { number: '03', title: 'Keep your plans close', text: 'See every submitted request and its current status from your bookings page.' },
]

function Home() {
  return (
    <div className="page-enter">
      <section className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:gap-14 lg:py-16">
        <div className="max-w-2xl">
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-forest"><span className="h-px w-8 bg-coral" /> A better way to meet on campus</p>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]">Good work needs a <span className="relative inline-block">good room<span className="absolute -bottom-1 left-0 -z-10 h-3 w-full bg-lime" /></span>.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/65 sm:text-lg sm:leading-8">Find a quiet corner, gather your study group, and get straight to what matters. Commonroom makes campus study space easier to find and request.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/rooms" className="inline-flex items-center justify-center gap-2 rounded-lg bg-forest px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2">View Study Rooms <span aria-hidden="true">&rarr;</span></Link>
            <Link to="/book" className="inline-flex items-center justify-center rounded-lg border border-ink/20 bg-white px-5 py-3.5 text-sm font-bold text-ink transition-colors hover:border-forest hover:text-forest focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2">Book a Room</Link>
          </div>
          <div className="mt-9 flex items-center gap-4 border-t border-ink/10 pt-5 text-sm text-ink/60">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-lime text-xs font-bold text-ink">S</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-[#f6b39e] text-xs font-bold text-ink">G</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-paper bg-[#b8d5c0] text-xs font-bold text-ink">T</span>
            </div>
            <span>Made for the way students study together.</span>
          </div>
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#d6e1d4] sm:min-h-[400px] lg:min-h-[470px]">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85" alt="Bright shared study space with a long table and leafy plants" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/5" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 sm:bottom-7 sm:left-7 sm:right-7">
            <div className="text-white">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75">Find a place to focus</p>
              <p className="mt-1 font-display text-2xl font-bold">Your next study session starts here.</p>
            </div>
            <span className="hidden rounded-full bg-lime px-3 py-2 text-xs font-bold text-ink sm:inline-flex">On campus</span>
          </div>
          <div className="absolute right-4 top-4 rounded-xl bg-white px-4 py-3 shadow-lg sm:right-6 sm:top-6">
            <p className="text-xs font-semibold text-ink/55">Spaces to explore</p>
            <p className="font-display text-2xl font-extrabold text-forest">08<span className="ml-1 text-sm font-bold text-coral">rooms</span></p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/65">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest">Less logistics, more learning</p>
              <h2 className="mt-2 font-display text-2xl font-extrabold sm:text-3xl">Space for every kind of study day.</h2>
            </div>
            <Link to="/rooms" className="w-fit text-sm font-bold text-forest hover:text-ink">Explore all rooms <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <div className="grid gap-0 md:grid-cols-3">
            {features.map((feature, index) => (
              <article key={feature.number} className={`py-5 md:px-6 ${index > 0 ? 'border-t border-ink/10 md:border-l md:border-t-0' : 'md:pl-0'} ${index === features.length - 1 ? 'md:pr-0' : ''}`}>
                <span className="font-display text-sm font-extrabold text-coral">{feature.number}</span>
                <h3 className="mt-3 font-display text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-ink/60">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home