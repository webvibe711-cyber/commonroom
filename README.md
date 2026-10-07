# Commonroom | Campus Study Room Booking System

Team 1's Part B project is a small client-side React app for finding campus study rooms and submitting booking requests. It uses local mock room data; there is no backend, database, or browser storage. Booking requests remain in React state for the current page session.

## Requirements

- Node.js 18 or newer
- npm

## Install and run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
campus-study-room-booking/
|-- .gitignore
|-- index.html
|-- package.json
|-- package-lock.json
|-- postcss.config.js
|-- tailwind.config.js
|-- vite.config.js
|-- README.md
`-- src/
    |-- App.jsx
    |-- index.css
    |-- main.jsx
    |-- components/
    |   |-- BookingCard.jsx
    |   |-- BookingForm.jsx
    |   |-- BookingList.jsx
    |   |-- Navbar.jsx
    |   |-- RoomCard.jsx
    |   `-- SearchBar.jsx
    |-- data/
    |   `-- rooms.js
    `-- pages/
        |-- BookRoom.jsx
        |-- Home.jsx
        |-- MyBookings.jsx
        `-- Rooms.jsx
```

## Pages and components

- `App.jsx` owns the submitted booking state and maps the four routes to pages.
- `Navbar.jsx` provides the shared, client-side navigation and request count.
- `Home.jsx` introduces the app and links to browsing and booking.
- `Rooms.jsx` loads mock room data, filters it by name/building, and displays room cards.
- `RoomCard.jsx` shows a room's location, capacity, and availability; available rooms link to the prefilled booking form.
- `SearchBar.jsx` is a reusable controlled search input.
- `BookRoom.jsx` hosts the booking form and confirms a successful request.
- `BookingForm.jsx` validates and submits controlled form fields.
- `MyBookings.jsx` displays the submitted requests.
- `BookingList.jsx` handles both the populated list and the empty state.
- `BookingCard.jsx` displays one booking's details and status.
- `src/data/rooms.js` contains the local sample room records.

## Concepts used

- **Props:** Values such as a room, a list of bookings, or a submit function are passed from parent components to reusable child components.
- **`useState`:** Stores interactive values such as the search query, form fields, confirmation, and submitted bookings. A state update asks React to render the updated UI.
- **`useEffect`:** The Rooms page loads the local room array when the page first mounts. This demonstrates the same lifecycle pattern used when loading data from an API, without a backend.
- **Controlled inputs:** Each form field and the search box get their displayed value from React state and update it through `onChange`.
- **`map()`:** Turns arrays of rooms, navigation links, features, or bookings into rendered JSX.
- **Unique keys:** Each mapped item uses a stable identifier (`room.id`, `booking.id`, or a feature number) so React can track list items correctly.
- **`preventDefault()`:** The form submit handler calls `event.preventDefault()` so the browser does not reload the page before React validates and handles the request.
- **React Router:** `BrowserRouter`, `Routes`, `Route`, `NavLink`, and `Link` provide page navigation without a full page refresh.
- **Tailwind CSS:** Utility classes style the layout and components. `tailwind.config.js` scans the HTML and JSX files; PostCSS loads Tailwind and Autoprefixer.

## Testing checklist

- [ ] Open Home and navigate to Study Rooms, Book a Room, and My Bookings without a page refresh.
- [ ] Search by a room name and a building; clear the query to restore the full list.
- [ ] Search for a value with no matches and confirm "No rooms found".
- [ ] Open My Bookings before submitting anything and confirm "No bookings yet".
- [ ] Submit an empty booking form and confirm required-field feedback appears without a reload.
- [ ] Enter a student count above the selected room's capacity and confirm the request is rejected.
- [ ] Submit a valid booking and confirm the details are shown on the form page.
- [ ] Open My Bookings and confirm the submitted booking and Pending status appear.
- [ ] Check the layout at mobile, tablet, and desktop widths.

## Interview practice

**Q: Why is booking state stored in `App.jsx`?**  
A: Both the booking form and My Bookings need the same data. Keeping it in their nearest shared parent lets both pages use it through props.

**Q: Why does the form use controlled inputs?**  
A: React owns each field's current value, so validation, reset, and submission all use one consistent state.

**Q: What does `useEffect` do in Rooms?**  
A: It initializes the page's room list once when the component mounts. The source is a local array today, but the lifecycle pattern is beginner-friendly and can later load remote data.

**Q: Why does every mapped element need a key?**  
A: A stable unique key helps React identify which list items changed, were added, or were removed when rendering updates.

**Q: Why call `preventDefault()` on form submission?**  
A: A normal HTML form submission reloads the page. Preventing the default keeps the single-page app running while its handler validates and stores the request.

**Q: How does React Router avoid full page loads?**  
A: Its `Link` and `NavLink` components update the browser URL and render the matching route in the existing app rather than requesting a new HTML page.

**Q: Where are bookings saved?**  
A: In React state in memory. They are available while the app session is running, but disappear on a full refresh because this Day 3 mock project has no backend or browser-storage database.

**Q: How does the app stop a group from exceeding room capacity?**  
A: The number input shows the selected room's capacity as its maximum, and the submit handler validates the value again before creating the booking.