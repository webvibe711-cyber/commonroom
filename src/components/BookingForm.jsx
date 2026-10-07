import { useState } from 'react'

function BookingForm({ rooms, onSubmit, initialRoom = '' }) {
  const [form, setForm] = useState({
    studentName: '',
    room: initialRoom,
    date: '',
    time: '',
    studentCount: '1',
  })
  const [error, setError] = useState('')
  const availableRooms = rooms.filter((room) => room.available)
  const selectedRoom = availableRooms.find((room) => room.name === form.room)
  const today = new Date().toLocaleDateString('en-CA')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    const numberOfStudents = Number(form.studentCount)

    if (!form.studentName.trim() || !form.room || !form.date || !form.time || !form.studentCount) {
      setError('Please complete every field before submitting.')
      return
    }
    if (!Number.isInteger(numberOfStudents) || numberOfStudents < 1) {
      setError('Enter a whole number of students greater than zero.')
      return
    }
    if (selectedRoom && numberOfStudents > selectedRoom.capacity) {
      setError(`${selectedRoom.name} holds up to ${selectedRoom.capacity} students. Choose a larger room or reduce your group size.`)
      return
    }

    onSubmit({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      studentName: form.studentName.trim(),
      room: form.room,
      date: form.date,
      time: form.time,
      studentCount: numberOfStudents,
      status: 'Pending',
    })
    setForm({ studentName: '', room: '', date: '', time: '', studentCount: '1' })
    setError('')
  }

  const fieldClass = 'mt-2 w-full rounded-lg border border-ink/15 bg-white px-3.5 py-3 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15'
  const labelClass = 'block text-sm font-bold text-ink'

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className={labelClass} htmlFor="studentName">Student name</label>
        <input className={fieldClass} id="studentName" name="studentName" value={form.studentName} onChange={handleChange} placeholder="Your full name" autoComplete="name" required />
      </div>
      <div>
        <label className={labelClass} htmlFor="room">Study room</label>
        <select className={fieldClass} id="room" name="room" value={form.room} onChange={handleChange} required>
          <option value="">Select an available room</option>
          {availableRooms.map((room) => <option key={room.id} value={room.name}>{room.name} - {room.building}</option>)}
        </select>
        {selectedRoom && <p className="mt-1.5 text-xs text-ink/55">This room accommodates up to {selectedRoom.capacity} students.</p>}
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="date">Date</label>
          <input className={fieldClass} id="date" name="date" type="date" min={today} value={form.date} onChange={handleChange} required />
        </div>
        <div>
          <label className={labelClass} htmlFor="time">Start time</label>
          <input className={fieldClass} id="time" name="time" type="time" value={form.time} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor="studentCount">Number of students</label>
        <input className={fieldClass} id="studentCount" name="studentCount" type="number" min="1" max={selectedRoom?.capacity ?? 10} step="1" value={form.studentCount} onChange={handleChange} required />
      </div>
      {error && <p className="rounded-lg border border-[#f2c7bb] bg-[#fdf0ec] px-4 py-3 text-sm font-medium text-[#963e2e]" role="alert">{error}</p>}
      <button type="submit" className="w-full rounded-lg bg-forest px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-ink focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2">
        Submit booking request <span aria-hidden="true">&rarr;</span>
      </button>
      <p className="text-center text-xs text-ink/50">Your request will appear in My Bookings with a pending status.</p>
    </form>
  )
}

export default BookingForm