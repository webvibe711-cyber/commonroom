function SearchBar({ value, onChange }) {
  return (
    <label className="block w-full max-w-lg">
      <span className="sr-only">Search by room name or building</span>
      <span className="flex items-center gap-3 rounded-xl border border-ink/15 bg-white px-4 py-3 shadow-sm focus-within:border-forest focus-within:ring-2 focus-within:ring-forest/15">
        <span className="text-xs font-bold text-ink/45" aria-hidden="true">Find</span>
        <input
          type="search"
          value={value}
          onChange={onChange}
          placeholder="Try North Library or Oak Room"
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink/40"
        />
      </span>
    </label>
  )
}

export default SearchBar