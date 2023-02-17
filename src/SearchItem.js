const SearchItem = ({search, setSearch}) => {
  return(
    <form className="searchForm ml-2 mt-4" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="text"
        role='searchbox'
        placeholder="Search Items"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBox p-2 m-1 border-2 border-slate-400" 
      />
    </form>
  )
}

export default SearchItem;