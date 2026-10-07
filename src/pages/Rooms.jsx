import { useEffect, useState } from 'react'
import RoomCard from '../components/RoomCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import roomData from '../data/rooms.js'

function Rooms() {
  const [rooms, setRooms] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setRooms(roomData)
  }, [])

  const normalizedSearch = searchTerm.trim().toLowerCase()
  const filteredRooms = rooms.filter((room) =>
    `${room.name} ${room.building}`.toLowerCase().includes(normalizedSearch),
  )

  return (
    <section className="page-enter mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-12">
      <div className="flex flex-col justify-between gap-6 border-b border-ink/10 pb-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-forest">Your campus, your study spot</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Study rooms</h1>
          <p className="mt-2 text-sm text-ink/60">Find a space that fits your group and your plans.</p>
        </div>
        <SearchBar value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      </div>
      <div className="mb-4 mt-7 flex items-center justify-between text-sm">
        <p className="font-semibold text-ink/75">{normalizedSearch ? `${filteredRooms.length} matching ${filteredRooms.length === 1 ? 'room' : 'rooms'}` : 'All campus rooms'}</p>
        <p className="text-ink/50">{rooms.filter((room) => room.available).length} currently available</p>
      </div>
      {filteredRooms.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-ink/20 bg-white/60 px-6 py-14 text-center">
          <p className="font-display text-lg font-bold">No rooms found</p>
          <p className="mt-1 text-sm text-ink/55">Try another room name or building.</p>
        </div>
      )}
    </section>
  )
}

export default Rooms